import React, { useState } from 'react'
import Stays from './stays.json'
import Place from './Place';
console.log(Stays);
export default function Houses () {
const Stay = Stays;
console.log(Stays);
 return(
   <>
      {Stay.map((place , index) => {
      return( 
         <Place key={index} place={place}></Place>
      )
     })}
  </>
 )
}
