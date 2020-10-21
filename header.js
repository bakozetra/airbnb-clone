import React, { useState }  from 'react'
import Stays from './stays.json'
import  logo  from './logo.svg'
import search from'./search.svg'
import Popup from './popup'
export default function Header (props) {

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
    return (
          <>
            <a href="./"><img src ={logo}></img></a>
            <label>
              <button  
              type="button"
              value="Click to Open Popup"
              onClick={togglePopup}
              >Helsiki, Finland</button>
              <button>Add guests  </button>
              <button><img src={search}></img></button>
            </label>
            {isOpen && <Popup 
                  content= {
                <>
                    <label htmlFor ="pet-select">Location <br/></label>
                    <select name="pets" id="pet-select">
                      {props.places.map( prop => {
                        return(<option key={prop.places.id} value="">{prop.city}</option>)
                      })}
                    </select>
                    <button>Guest <br/>Add guests</button>
                    <button><img src={search}>
                    </img></button>
                  </>
                }
                handleClose={togglePopup}
          />}
          
  </>
)
}