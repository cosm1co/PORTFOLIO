import React from 'react'

export default function Contact() {
  return (
    <div name='contact' className='w-full md:h-screen flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/b8acec04-fe30-40a1-8e83-8f8208c6c118" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-2 '>
                <p className='text-2xl font-bold text-[#7D22D8]'>
                  Please get in touch 📬
                  </p>
                <p className='py-4 text-black'>Submit the form below or send me an email - federicofaraz@gmail.com</p>
            </div>
            <input className=' bg-white p-2 border-2 border-[#7D22D8]' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-white border-2 border-[#7D22D8]' type="email" placeholder='Email' name='email'/>
            <textarea className=' bg-white p-2 border-2 border-[#7D22D8]' name="message" rows="5" placeholder='Message'></textarea>
            <button className='text-black hover:text-white border-2 border-[#7D22D8] hover:bg-[#7d22d8b2] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collab 🤝</button>
        </form>
    </div>
  )
}
