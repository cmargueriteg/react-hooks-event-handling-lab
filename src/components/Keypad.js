// Code Keypad Component Here

import React from 'react'

function Keypad() {
    function changeChallenge(){
           console.log("Entering password...")

    }

  return (
    
        <input
        type="password"
        onChange={changeChallenge}
           />
  )
}

export default Keypad
