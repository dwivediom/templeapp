import React from 'react'
import Templeitem from './Templeitem'
import Data from "../data.json"
import "../App.css"
function Mvtemples() {

  function mouseover(event){ 

    const element = document.getElementById("container2");

    element.addEventListener('wheel', (event) => {
 
      event.preventDefault();
    
      element.scrollBy({
        left: event.deltaY < 0 ? -290 : 290,
     
        behavior: 'smooth'
        
      });
    });
 }

  return (
    <div className='lfmargin'>
        <div>
        <div  className='title sub-title'>Most  Visited</div>
        <div className='d-flex    justify-content-evenly hscroll '  onMouseOver={mouseover}  id="container2" >
          { 
             Data.mostVisitedTemples.temples.map(temples=>{ 
                            
               return(
                  <Templeitem key={temples.id} title={temples.title}  path={"Data.mostVisitedTemples.temples"} id={temples.id} country={temples.country} state={temples.state} locality={temples.locality}/> 
                  
               )
             })
          }

        </div>
        </div>
   

 </div>


  )
}

export default Mvtemples