import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='w-full md:h-screen flex justify-center items-center p-4 bg-gradient-to-r from-[#7d22d8b2]'>
        <form method='POST' action="https://getform.io/f/b8acec04-fe30-40a1-8e83-8f8208c6c118" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-2 '>
                <p className='text-2xl font-bold text-[#2b2727]'>
                  Please get in touch 📬
                  </p>
                <p className='py-4 text-[#2b2727]'>Submit the form below or send me an email - federicofaraz@gmail.com</p>
            </div>
            <input className=' bg-white p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email'/>
            <textarea className=' bg-white p-2' name="message" rows="5" placeholder='Message'></textarea>
            <button className='border-2 text-[#2b2727] hover:border-[#7d22d8b2] hover:bg-[#7d22d8b2] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collab 🤝</button>
        </form>
    </div>
  )
}
