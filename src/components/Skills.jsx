import React from 'react'
import js from '../assets/JavaScript.png';
import reactimg from '../assets/React.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import postgress from '../assets/postgress.png';
import node from '../assets/node.png';
import './styles.css'

export default function Skills() {
  return (
    <div name='skills' className='w-full h-screen'>
        
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className=''>
                <p className='text-4xl font-bold inline text-[#7D22D8]'>My tech stack</p>
                <p className='py-4 text-black'>These are the technologies I've worked with ⚙️</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-16 text-center py-8'>
                <div className='shadow-md hover:shadow-[#7D22D8] hover:scale-110 duration-500 pt-5 border-2 border-[#7D22D8]'>
                    <img className='w-16 mx-auto' src={html} alt="HTML icon" />
                    <p className='my-4 text-black font-bold'>HTML</p>
                </div>
                <div className='shadow-md hover:shadow-[#7D22D8] hover:scale-110 duration-500 pt-5 border-2 border-[#7D22D8]'>
                    <img className='w-16 mx-auto' src={css} alt="HTML icon" />
                    <p className='my-4 text-black font-bold'>CSS</p>
                </div>
                <div className='shadow-md hover:shadow-[#7D22D8] hover:scale-110 duration-500 pt-5 border-2 border-[#7D22D8]'>
                    <img className='w-16 mx-auto' src={js} alt="HTML icon" />
                    <p className='my-4 text-black font-bold'>JavaScript</p>
                </div>
                <div className='shadow-md hover:shadow-[#7D22D8] hover:scale-110 duration-500 pt-5 border-2 border-[#7D22D8]'>
                    <img className='w-16 mx-auto' src={reactimg} alt="HTML icon" />
                    <p className='my-4 text-black font-bold'>React.js</p>
                </div>
                <div className='shadow-md hover:shadow-[#7D22D8] hover:scale-110 duration-500 pt-5 border-2 border-[#7D22D8]'>
                    <img className='w-16 mx-auto' src={node} alt="HTML icon" />
                    <p className='my-4 text-black font-bold'>Node.js</p>
                </div>
                <div className='shadow-md hover:shadow-[#7D22D8] hover:scale-110 duration-500 pt-5 border-2 border-[#7D22D8]'>
                    <img className='w-16 mx-auto' src={postgress} alt="HTML icon" />
                    <p className='my-4 text-black font-bold'>PostgreSQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}
