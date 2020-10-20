import React from 'react'
import Stays from './stays.json'
import Place from './Place';
import Header from './header'
import IDs from './Id'

console.log(Stays);
export default function Houses () { 
const Stay = Stays;
console.log(Stays);
 return(
   <>
     <Header/>
    <div className ="container">
      {Stay.map((place) => {
      return( 
        <>
          <Place key={IDs} place={place}></Place>
         </>
      )
     })}
     </div>
  </>
 )
}
