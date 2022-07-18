import React from 'react'
import '../App.css';
import Data from '../data.json'; 
import Carouselimg from './Carouselimg';
function Carousel() {
  
     var templeImg = []  
     var i=0 ;  
    for ( const key in Data.recentlyAddedTemples.imageLocations){
            templeImg[i]  = key; 

             i++                      
 }  console.log( Data.recentlyAddedTemples.imageLocations[615])
  

    return (
        <>
            <div className=' lfmargin    carusal '>
                <div id="carouselExampleIndicators" className="carousel carousel-dark carousel-fade slide" data-bs-ride="true">

                    <div className="carousel-inner">
                                 
                        
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src="https://source.unsplash.com/random/?nature" className=" tales d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://source.unsplash.com/random/?temple "className="tales d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" className="tales d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active  " aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Carousel