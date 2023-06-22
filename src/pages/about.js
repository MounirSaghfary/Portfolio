import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import home from '../../public/images/profile/home.png'
import Image from 'next/image'
import { Skills } from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const about = () => {
  return (
    <>
        <Head>
            <title>Mounir Saghafry || About Page</title>
        </Head>
        <main className='flex w-full col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Innovate. Iterate. Impact." className='mb-16'/>
                <div class="container mx-auto px-4 py-16 text-white">
                    <div class="grid grid-cols-2 gap-16">
                        <div>
                        <h2 class="text-3xl font-bold uppercase mb-6">Biography</h2>
                        <p class="text-lg leading-relaxed">
                            Greetings, I'm Mounir Saghafry, a skilled developer and UI/UX designer specializing in web, mobile, and desktop platforms. With over two years of hands-on experience in this field, I am continuously exploring novel and imaginative approaches to transform my clients' visions into tangible realities. I am driven by a passion for crafting visually appealing, functional, and user-centered solutions that leave a lasting impression.
                        </p>
                        <p class="text-lg leading-relaxed mt-6 my-6">
                            I believe that programming is not only about solving problems but also about creating intuitive, enjoyable experiences for users.
                        </p>
                        <p class="text-lg leading-relaxed">
                            Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                        </div>
                        <div class="flex flex-col justify-between">
                        <div class="mb-8">
                            <h2 class="text-3xl font-bold uppercase mb-6">Projects Completed</h2>
                            <span class="text-6xl font-bold">10+</span>
                        </div>
                        <div class="mb-8">
                            <h2 class="text-3xl font-bold uppercase mb-6">Certificates Earned</h2>
                            <span class="text-6xl font-bold">10+</span>
                        </div>
                        <div>
                            <h2 class="text-3xl font-bold uppercase mb-6">Years of Experience</h2>
                            <span class="text-6xl font-bold">2+</span>
                        </div>
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