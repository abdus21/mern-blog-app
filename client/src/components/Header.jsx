import React from 'react'
import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput} from 'flowbite-react'
import {Link, useLocation} from 'react-router-dom'
import { IoMoon, IoSearchOutline } from "react-icons/io5";

function Header() {
  const path = useLocation().pathname

  return (
    <Navbar className='border-b-2'>
      <Link to={'/'} className='self-center whitespace-normal text-sm font-semibold sm:text-xl dark:text-white'>
       <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Abdus Samad's</span>
       Blog
      </Link>
      <form>
        <TextInput
         type='text'
         placeholder='Search...'
         rightIcon={IoSearchOutline}
         className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color={'gray'}>
         <IoSearchOutline/>
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color={'gray'} pill>
          <IoMoon/>
        </Button>
        <Link to={'/sign-in'}>
          <Button outline gradientDuoTone={'purpleToBlue'}>
            Sign In
          </Button>
        </Link>
        <NavbarToggle/>
      </div>
      <NavbarCollapse>
          <NavbarLink active={path === '/'}>
            <Link to={'/'}>
              Home
            </Link>
          </NavbarLink>
          <NavbarLink  active={path === '/about'}>
            <Link to={'/about'}>
              About
            </Link>
          </NavbarLink>
          <NavbarLink active={path === '/projects'}>
            <Link to={'/projects'}>
            Project
            </Link>
          </NavbarLink>
        </NavbarCollapse>
    </Navbar>
  )
}

export default Header