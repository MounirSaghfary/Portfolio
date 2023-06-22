import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import {TwitterIcon, LinkedInIcon, GithubIcon} from './Icons'
import {motion} from 'framer-motion'

const CustomLink = ({href, title, className = ""}) => {
    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block w-0 bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
            ${router.asPath === href ? 'w-full': 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex item-center justify-between text-light/50'>
        <nav>
            <CustomLink href='/' title='Home' className='mr-4'/>
            <CustomLink href='/about' title='About'  className='mx-4'/>
            <CustomLink href='/projects' title='Projects'  className='mx-4'/>
            <CustomLink href='/certificates' title='Certificates'  className='ml-4'/>
        </nav>
        <nav className='flex item-center justify-between flex-wrap '>
            <motion.a href='https://twitter.com/SaghMounir85385' target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 mx-3'>
                <TwitterIcon />
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/mounir-saghfary-55893422b/' target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 mx-3'>
                <LinkedInIcon />
            </motion.a>
            <motion.a href='https://github.com/MounirSaghfary' target={"_blank"} whileHover={{y: -2}} whileTap={{scale: 0.9}} className='w-6 ml-3'>
                <GithubIcon />
            </motion.a>
        </nav>

    </header>
  )
}

export default NavBar