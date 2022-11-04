import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

export default function Home() {
  return (
    <div name='home' className='w-full h-screen '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-black tracking-widest mb-5'>HI EVERYONE! WELCOME TO MY PORTFOLIO 🚀</p>
            <h1 className='text-6xl sm:text-7x1 font-extrabold text-[#7D22D8] mb-7'>I'm Federico Faraz</h1>
            <h2 className='text-3xl sm:text-7x1 font-bold text-black'>Full Stack Web Developer based in Mendoza - Argentina ⛰️🌤️</h2>
            <div>
              <Link to="projects" smooth={true} duration={500}>
                <button className='text-black group border-2 px-6 py-3 mt-6 flex items-center border-[#7d22d8b2] hover:bg-[#7d22d8b2] hover:text-white'>
                View Work 💪🏼
                  <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3' />
                  </span>
                </button>
              </Link>
            </div>
        </div>
        
    </div>
  )
}
