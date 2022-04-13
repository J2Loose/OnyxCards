import { useReducer, useEffect } from 'react'
import { database } from '../firebase'
import { useAuth } from '../contexts/AuthContext'


const ACTIONS = {
  SELECT_DECK: 'select_deck',
  UPDATE_DECK: 'update-deck',
  SET_CHILD_DECKS: 'set-child-decks',
  SET_CHILD_CARDS: 'set-child-cards',

}

//creating the "folder" in which decks will be created
const ROOT_DECK = { name: 'Root', id: null, path: [] }


function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SELECT_DECK:
      return  {
        deckId: payload.deckId,
        deck: payload.deck,
        childCards: [],
        childDecks: [],
      }
      case ACTIONS.UPDATE_DECK:
        return {
          ...state,
          deck: payload.deck,
        }
        case ACTIONS.SET_CHILD_DECKS:
          return {
            ...state,
            childDecks: payload.childDecks,
          }

          case ACTIONS.SET_CHILD_CARDS:
            return {
              ...state,
              childCards: payload.childCards,
            }
      default:
        return state
  }
}

export function useDeck(deckId = null, deck = null) {
  const [state, dispatch] = useReducer(reducer, {
    deckId,
    deck,
    childDecks: [],
    childCards: []
  })

  //used for querying database
  const { currentUser } = useAuth()


  useEffect(() => {
    dispatch({ type: ACTIONS.SELECT_DECK, payload: { deckId, deck }  })
  }, [deckId, deck])

  useEffect(() => {
    if (deckId == null) {
      return dispatch({
        type: ACTIONS.UPDATE_DECK,
        payload: { deck: ROOT_DECK },
      })
    }

    //reading from database
    database.decks
      .doc(deckId)
      .get()
      .then(doc => {
        dispatch({
          type: ACTIONS.UPDATE_DECK,
          payload: { deck: database.formatDoc(doc) },
        })
      })
    .catch(() => {
      dispatch({
        type: ACTIONS.UPDATE_DECK,
        payload: { deck: ROOT_DECK },
      })
    })
  }, [deckId])

  //only showing decks that have been created by the user
  useEffect(() => {
    return database.decks
    .where('parentId', '==', deckId)
    .where('userId', '==', currentUser.uid)
    .orderBy('createdAt')
    .onSnapshot(snapshot => {
      dispatch({
        type: ACTIONS.SET_CHILD_DECKS,
        payload: { childDecks: snapshot.docs.map(database.formatDoc) }
      })
    })
  }, [deckId, currentUser])

  //only showing cards that are in the selected deck
  useEffect(() => {
    return database.cards
    .where('parentId', '==', deckId)
    .where('userId', '==', currentUser.uid)
    .orderBy('createdAt')
    .onSnapshot(snapshot => {
      dispatch({
        type: ACTIONS.SET_CHILD_CARDS,
        payload: { childCards: snapshot.docs.map(database.formatDoc) }
      })
    })
  }, [deckId, currentUser])


  return state

}