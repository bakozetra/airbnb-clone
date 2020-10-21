import React from 'react'
import Stays from './stays.json'
import Place from './Place';
import Header from './header'

console.log(Stays);
export default function Houses () { 
const Stay = Stays;
console.log(Stays);

// creating an id 
 for (var i=0 ; i<Stay.length ; i++) {
     Stay[i].id = i;
 }

 return(
   <>
     <Header places={Stay} />
    <div className ="container">
      {Stay.map((place) => {
      return( 
          <Place key={place.id} {...Stay} place={place}></Place>
      )
     })}
     </div>
  </>
 )
}
