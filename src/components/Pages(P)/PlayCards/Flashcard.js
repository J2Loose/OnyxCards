import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)


    return (
        //shows the card and allows for the flipping of the card
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
            style={{
                width: '750px', 
                height: '450px', 
                background: 'black', 
                color: 'white', 
                display: 'flex', 
                textAlign: 'center', 
                justifyContent: 'center',
                fontSize: '50px'
            }}
        >
            {flip ? flashcard.back : flashcard.front}
        </div>
    )
}
