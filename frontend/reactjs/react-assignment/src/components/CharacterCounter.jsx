import React, { useState } from 'react'

const CharacterCounter = () => {
    const [sentence,setSentence] = useState('')

    const lengthOfSent = sentence.length
    const wordCount = sentence.split(' ').length

  return (
    <>
    <h1 className='text-center'>Live Character Counter</h1>
    <div className="container">
        <input type="text" placeholder='Enter entence here' 
        onChange={(e)=>setSentence(e.target.value)}
        />

        <br />
        <p>Text : {sentence} </p>
        <p>Characters : {lengthOfSent} </p>
        <p>Words : {wordCount} </p>
    </div>
    </>
  )
}

export default CharacterCounter