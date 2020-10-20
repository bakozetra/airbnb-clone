import React, { useState }  from 'react'
import Stays from './stays.json'
import  logo  from './logo.svg'
import search from'./search.svg'
import Popup from './popup'
import Id from './Id'
export default function Header () {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
const Stay = Stays;
return (
  <>
    <a href="./"><img src ={logo}></img></a>
     <label>
      <button  
       type="button"
       value="Click to Open Popup"
       onClick={togglePopup}
       >
        Helsiki, Finland
      </button>
         {isOpen && <Popup
          content={<>
            {Stay.map( popup => {
              return (
                <p key ={Id}>{popup.city}</p>
              )
            }
            )}
         
         </>}
      handleClose={togglePopup}
    />}
      <button>Add guests  </button>
      <button><img src={search}></img></button>
     </label>
  </>
)
}