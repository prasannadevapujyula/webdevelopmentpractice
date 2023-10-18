import React from 'react'

function Cards(props) {
  return (
    
      <div class="card" style={{width: "18rem"}}>
  
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text"> {props.desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
  )
}

export default Cards
