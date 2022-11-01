import React from 'react'
import './styles.css'

export default function About() {
  return (
    <div name='about' className='w-full h-screen text-[#0a192f] shadow'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-2xl font-bold text-[#2b2727]'>
                        This is me. Hi! 👋😁
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='sm:text-right text-4xl font-bold text-[#7d22d8b2]'>
                        I'm looking for my very first IT job, I want to be challenged, grow and make the most of it!
                        </p>
                    </div>
                    <div className='text-[#2b2727]'>
                    I'm very curious and creative, a person in constant growth🌱, passionate about learning
                    new technologies💻 that help build a better world🌐. This is why I am a Full Stack Developer👨🏽‍💻.
                    I want to contribute, in a team with a good atmosphere, with all my knowledge in development and design,
                    and fulfilling the dream of creating digital products for the real needs of people and companies 🚀.
                    </div>
            </div>
        </div>
        
    </div>
  )
}
