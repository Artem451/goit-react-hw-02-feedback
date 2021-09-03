import React from 'react';


function FeedbackOptions ({onGoodClick, onNeutralClick, onBadClick}) {
    return (
        <>
            <ul className='control-feedback'>
            <li><button className='feedback-button' type='button' onClick = {onGoodClick}>Good</button></li>
            <li><button className='feedback-button' type='button' onClick = {onNeutralClick}>Neutral</button></li>
            <li><button className='feedback-button' type='button' onClick = {onBadClick}>Bad</button></li>
            </ul>
        </> 
    )
}

export default FeedbackOptions