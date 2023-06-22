import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-light/20 font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span className='text-light/50'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center text-light/50'>
                Build with <span className='text-primary text-2xl px-1'>&#9825;</span> by&nbsp;<Link href="/" className='underline text-light/50'>Mounir Saghfary </Link>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer