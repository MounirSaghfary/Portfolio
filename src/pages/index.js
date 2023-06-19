import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className=''>
        <Layout className='justify-center items-center pt-32 mb-14'>
          <div className="flex justify-center items-center w-full">
              <div className='w-1/2 flex flex-col items-center self-center'>
                <AnimatedText text="Coding the Future, One Line at a Time." className='!text-6xl !text-left' />
                <p className='my-4 text-base font-medium'>
                    As a proficient full-stack developer, my commitment lies in transforming concepts into groundbreaking applications. Take a dive into my most recent endeavors and informative write-ups, which highlight my proficiency in Software Development.
                </p>
                <div className='flex items-center self-start mt-2'>
                  <Link href="/dummy.pdf" target='_blank' className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg shadow-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark' download={true}>
                    Resume <LinkArrow className="w-6 ml-1"/> 
                  </Link>
                  <Link href="mailto:mounirsaghfary@gmail.com" target='_blank' className='ml-4 text-lg font-medium capitalize text-dark underline'>
                    Contact
                  </Link>
                </div>
              </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
