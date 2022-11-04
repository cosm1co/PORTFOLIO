import React from 'react'
import countries from '../assets/countries.jpg'
import techmarket from '../assets/techmarket.jpg'
import junior from '../assets/junior.png'
import './styles.css'

export default function Projects() {
  return (
    <div name='projects' className='w-full md:h-screen text-[#F6F6F6] shadow navbar'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-white'>These are my projects so far ✔️</p>
                <p className='py-6 text-white'>Check out some of my recent work</p>
            </div>

            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* grid items */}
                <div style={{backgroundImage: `url(${junior})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           JUNIOR app
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://appjunior.vercel.app/" target={'blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/gpitrella/JUNIOR" target={'blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${techmarket})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                           TechMarket Ecommerce 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://techmarketfront.vercel.app/" target={'blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/cosm1co/PF-FrontEnd" target={'blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${countries})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Countries App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://countries-app-beta-one.vercel.app/" target={'blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/cosm1co/Countries" target={'blank'}>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

               
            </div>

        </div>
    </div>
  )
}
