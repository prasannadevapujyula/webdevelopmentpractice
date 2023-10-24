import React, { Component } from 'react'

export default class Eventhandling extends Component {
    handleClick=()=>{
        console.log("Button is clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click here</button>
      </div>
    )
  }
}
