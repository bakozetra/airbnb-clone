import React, { useState } from 'react'
import Stays from './stays.json'
import Place from './Place';
import  logo  from './logo.svg'
import search from'./search.svg'
console.log(Stays);
export default function Houses () {
const Stay = Stays;
console.log(Stays);
 return(
   <>
      <a href="./"><img src ={logo}></img></a>
     <label>
      <button>Helsiki, Finland</button>
      <button>Add guests  </button>
      <button><img src={search}></img></button>
     </label>
    <div className ="container">
      {Stay.map((place , index) => {
      return( 
         <Place key={index} place={place}></Place>
      )
     })}
     </div>
  </>
 )
}
