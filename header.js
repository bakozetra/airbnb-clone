import React, { useState }  from 'react'
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
                        <select name="pets" id="pet-select" onClick={props.handleChange} value={props.e.target.value}>
                           <option value="Helsinki Finland">Helsinki Finland</option>
                           <option  value="Turku Finland">Turku Finland </option>
                           <option  value="Oulu Finland">Oulu Finland </option>
                           <option  value="Vaasa Finland">Vaasa Finland </option>
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