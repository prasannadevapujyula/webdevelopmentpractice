import React from 'react'

function Eventhandlingfunc() {
    const handleClick=() => {
        console.log("button is clicked in function based component")
    }
  return (
    <div>
      <button onClick={handleClick}> click me in function basedcomponent</button>
    </div>
  )
}

export default Eventhandlingfunc
