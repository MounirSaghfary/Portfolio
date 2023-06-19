import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image'
import { Skills } from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const about = () => {
  return (
    <>
        <Head>
            <title>About Page</title>
        </Head>
        <main className='flex w-full col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Innovate. Iterate. Impact." className='mb-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                             Greetings, I'm Mounir Saghafry, a skilled developer and UI/UX designer specializing in web, mobile, and desktop platforms. With over two years of hands-on experience in this field, I am continuously exploring novel and imaginative approaches to transform my clients' visions into tangible realities. I am driven by a passion for crafting visually appealing, functional, and user-centered solutions that leave a lasting impression.
                        </p>
                        <p className='my-4 font-medium'>
                            I believe that programming is not only about solving problems but it is also about 
                            creating intuitive, enjoyable experiences for users. 
                        </p>
                        <p className='font-medium'>
                            Whether I'm working on a website, mobile app, or 
                            other digital product, I bring my commitment to design excellence and user-centered thinking to 
                            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rouded-2xl border-2 border-solid border-dark shadow-lg bg-light p-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl shadow-lg bg-dark'/>
                        <Image src={profilePic} alt="Mounir Saghfary" className="w-full h-auto rounded-2xl"/>
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>10+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Projects Completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>10+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Certificates Earned</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>2+</span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>Years of Experience</h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about