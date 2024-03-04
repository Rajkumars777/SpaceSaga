import React from 'react'
import Navbar from '../components/navbar';
import '../App.css';
import background from "../video/black.mp4";



const Homepage = () => {
  return (
    <>
   
    <video  autoPlay loop muted id="video" className='relative isolate sm:mt-0 sm:mg-0 mt-0 mg-0 overflow-hidden'>
      <source src={background} type='video/mp4'/>
    </video>
    <div className=' h-screen overflow-hidden  '>
      <Navbar />

      <div className="flex hidden:bg-red-900 w-[100%] h-[90%] ">
        <div className='h-full hidden:bg-yellow-500 w-[300%] '>

          <img className="size-30 h-[10%] ml-16 mt-[18%] w-[40%]" src="https://see.fontimg.com/api/renderfont4/jW3R/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/U3BhY2VTQUdB/star-jedi-rounded.png" alt="Star Wars fonts" />

        </div>
        
      </div>
      <div className='justify-center items-center flex'>
        <footer className="footer footer-center text-white p-4 bg-black-300 ">
          <aside>
            <p className="text-white">Copyright © 2024 - All right reserved by Raj Websites</p>
          </aside>
        </footer>
      </div>
    </div></>
  )
}

export default Homepage;