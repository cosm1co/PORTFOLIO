import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/Logo.png';
import {Link} from 'react-scroll'
import './styles.css'


export default function NavBar() {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-[#F6F6F6] nose shadow-xl shadow-[#2b272731]' >
        <div>
            <img src={Logo} alt="Logo" style={{width: '50px'}}/>
        </div>

        {/* menu */}
          <ul className='hidden md:flex font-bold text-white'>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                Myself
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile manu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
              </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                Myself
              </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
              </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                Projects
              </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
              </Link>
          </li>
        </ul>

        {/* social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <button></button>
          <ul>
            <li className='w-[140px] h-[45px] flex justify-between items-center ml-[-85px] hover:ml-[-5px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-[#F6F6F6] '
              href="https://www.linkedin.com/in/federicofaraz-fullstack/" target={'blank'}>
                LinkedIn <FaLinkedin size={25}/>
              </a>
            </li>
            <li className='w-[140px] h-[45px] flex justify-between items-center ml-[-85px] hover:ml-[-5px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-[#F6F6F6] '
              href="https://github.com/cosm1co" target={'blank'}>
                Github <FaGithub size={25}/>
              </a>
            </li>
            <li className='w-[140px] h-[45px] flex justify-between items-center ml-[-85px] hover:ml-[-5px] duration-300 bg-[#FF3D3D]'>
              <Link to="contact" smooth={true} duration={500} className='flex justify-between items-center w-full text-[#F6F6F6] '
              href="/">
                Email <HiOutlineMail size={25}/>
              </Link>
            </li>
            <li className='w-[140px] h-[45px] flex justify-between items-center ml-[-85px] hover:ml-[-5px] duration-300 bg-[#565F69]'>
              <a className='text-xs flex justify-between items-center w-full text-[#F6F6F6] '
              href="https://drive.google.com/file/d/1-23bU1LYTEZ1W3987QJ7TxfyiIipzAQy/view" target={'blank'}>
                Resume <BsFillPersonLinesFill size={25}/>
              </a>
            </li>
          </ul>

        </div>
    </div>
  )
}
