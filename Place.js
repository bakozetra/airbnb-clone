import React from 'react'

export default function Place ({place}) {
    return (
      <li>
        <img src = {place.photo}></img>
        <p>{place.city}</p>
        <p>{place.country}</p>
      </li>
    )
}