import React from 'react'
import '../App.css'


export default function Button({props}) {
  return (
    <div>
      <button className='Button-bot' onClick={props.actionProvider.handleClick}>Got it!</button>
    </div>
  )
}
