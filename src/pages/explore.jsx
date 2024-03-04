import React from 'react'
import Navbar from '../components/navbar';
import '../App.css';
import Searchbar from '../components/Searchbar';
import SearchResult from '../components/SearchResult';
import black from "../images/spacesaga.jpg"

const Homepage = () => {
  return (
    <div className=' w-full h-screen overflow-y-hidden  '>  
    <img
        src={black}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <Navbar/>
      
      
        <Searchbar/>
          
          <SearchResult/>
          
          
     
      <div className='justify-center items-center  flex'>
        <footer className="footer footer-center text-white p-4 bg-black-300 ">
  <aside>
    <p className="text-white">Copyright © 2024 - All right reserved by Raj Industries Ltd</p>
  </aside>
</footer>
</div>
      </div>
    
 
      
     
  
  )
}

export default Homepage;