import React from 'react'

export default function Place ({place}) {
    return (
      <div>
        <p> <img src = {place.photo}></img></p>
        <p>{place.city}</p>
        <p>{place.country}</p>
      </div>
    )
}