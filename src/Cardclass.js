import React, { Component } from 'react'

export default class Cardclass extends Component {

    constructor(props){
        super(props)
        this.props=props;

    }
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}
