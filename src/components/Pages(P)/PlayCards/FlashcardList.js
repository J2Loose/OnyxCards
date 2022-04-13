import React from 'react'
import Flashcard from './Flashcard'
import { Carousel } from 'react-bootstrap'

export default function FlashcardList({ flashcards }) {
    return (
        //shows the users cards using carousel from react bootstrap
        <div class='card-grid'>
            {/* interval makes sure that the next card doesn't automatically come up */}
            <Carousel interval={null}>
            {/* maps through the array passed to this function */}
            {flashcards.map(flashcard => {
                return (
                    <Carousel.Item>
                        <Flashcard flashcard={flashcard} key={flashcard.id} />
                    </Carousel.Item>
                )
            })}
            </Carousel>
        </div>
    )
}
