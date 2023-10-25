import React, { Component } from 'react'

export default class Listrender extends Component {

    constructor(){
super()
this.state={
    Employee:[
        {
            id:1,
            name:"panda",
            designation:"student"
            },
            {
                id:2,
                name:"krishna",
                designation:"ruler",
            },
            {
                id:3,
                name:"radha",
                designation:"queen",
            },
            {
                id:4,
                name:"balaram",
                designation:"protector"
            }

        ]
}

    }
  render() {
    return (
      <div>{this.state.Employee.map((row)=>{
        return(
            <div key={row.id}>
            
            
            <p>{row.id}</p>
            <p>{row.name}</p>
            <p>{row.designation}</p> 
            
            </div>
            
        )
      })}

        
      </div>
    )
  }
}
