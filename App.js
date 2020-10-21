import React, { useState } from 'react'
import Stays from './stays.json'
import Place from './Place';
import Header from './header'

console.log(Stays);
export default function Houses () { 
  let [stay , setStay] = useState(Stays);
  let [city , setCity] = useState(Stays);
// creating an id 
 for (var i=0 ; i<stay.length ; i++) {
     stay[i].id = i ;
 }

 const handleChange = (e) => { 
  stay = stay.filter(name => name.city.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
  console.log(stay);
  // setStay(e.target.value);
  
   console.log('djhgdfjkvhsdk.')
 }
 
 return(
   <>
     <Header places={stay} handleChange ={handleChange}/>
    <div className ="container">
      {stay.map(place => {
      return( 
          <Place key={place.id} place={place}></Place>
      )
     })}
     </div>
  </>
 )
}
