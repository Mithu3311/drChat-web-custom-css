import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '@/app/components/DRCHAT LOGO.png'

const Header = () => {
  return (
        <header className='header'>
            <Image className='logo' src={Logo} height={40} alt='blur'></Image>
            <nav className='menu'>
                <Link href="/" >Home</Link>
                <Link href="/components/about">About</Link>
                <Link href="/components/contact">Contact</Link>
                <Link href="/components/login">Log In</Link>
                <Link href="/components/signup">Sign Up</Link>
            </nav>
            <button className='button'>Book Now</button>
        </header>
  )
}

export default Header