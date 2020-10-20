import React from 'react'
import star from './star-svgrepo-com.svg'
import id from './Id'
export default function Place ({place}) {
    return (
      <li key = {id}>
        <img src = {place.photo}></img>
        <div className ="content">
          {place.superHost && <button>Super Host</button>}
          <p>{place.type}</p>
          <p style = {{position :'relative'}}> <img src={star}></img>{place.rating}</p>
        </div>
        <p>{place.title}</p>
        {/* <p>{place.city}</p>
        <p>{place.country}</p> */}
      </li>
    )
}