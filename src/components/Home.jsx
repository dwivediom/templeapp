import React from 'react'
import '../App.css';
    import Carousel from '../components/Carousel';
    import Footer from '../components/Footer';
   
    import Ltemples from '../components/Ltemples';
    import Mvtemples from '../components/Mvtemples';
    import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
        <Navbar/>
   <Carousel/>
   <Ltemples/>
   <Mvtemples/>
   <Footer/>
    </div>
  )
}

export default Home