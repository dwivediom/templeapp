import React from 'react'
import App from '../App'
import "../App.css"
import Templeitem from './Templeitem'
import Data from '../data.json'; 
function Ltemples() {
   function mouseover(event){ 
      
      const element = document.getElementById("container");
 
      element.addEventListener('wheel', (event) => {
   
        event.preventDefault();
      
        element.scrollBy({
          left: event.deltaY < 0 ? -290 : 290,
       
          behavior: 'smooth'
          
        });
      });
   }
  return (
     <div className='lfmargin '>
        <div  className='title  sub-title'>Latest Temples</div>
        <div className='d-flex  justify-content-evenly hscroll '  onMouseOver={mouseover}  id="container">
          { 
             Data.recentlyAddedTemples.temples.map(temples=>{ 
                            
               return(
                  <Templeitem key={temples.id} path={"Data.recentlyAddedTemples.temples"} id={temples.id} title={temples.title} country={temples.country} state={temples.state} locality={temples.locality}/> 
                  
               )
             })
          }

        </div>

     </div>
    
  )
}

export default Ltemples