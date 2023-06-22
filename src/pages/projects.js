import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Project = ({ type, title, summary,exist, github }) => {
  return (
        <article className="first:mt-0 last:mb-0 w-[60%] mx-auto">
        <div>
            <h3 className="capitalize font-bold text-2xl mb-2 underline">{title}</h3>
            <h2 className="capitalize font-semibold mb-2 text-dark">{type}</h2>
            <p className='mb-6 font-medium text-dark/75'>{summary}</p>
            {exist ==='exist'&&(
                <div className="grid grid-cols-2">
                    <GithubIcon className="w-50 h-11" />
                      <Link href={github} className="bg-black hover:bg-primary items-center font-medium text-white hover:underline">
                          <h className="flex pt-2 items-center justify-center">Visit Project</h>
                      </Link>
                </div>
            )}
        </div>
        </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Mounir Saghafry || Projects Page</title>
      </Head>

      <main className="w-full mb-36 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Code. Create. Inspire." />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12"></div>

            <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-xl mb-1 text-primary">Featured Project</h2>
              <Project
                type="Web Application"
                title="IT Affairs Management System"
                summary="The primary focus of the application is task, ticketing, purchases and budget management. Throughout the development process, I utilized my programming skills in Nextjs, SQL, JavaScript, and Tailwind CSS."
                github=""
              />
            </div>
            <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-xl mb-1 text-primary">Featured Project</h2>
              <Project
                type="Mobile Application"
                title="IT Affairs Management System"
                summary="This is the mobile version of the previous system. Throughout the development process, I utilized my programming skills in React Native, Expo, JavaScript, CSS, Supabase."
                github=""
              />
            </div>
            <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-xl mb-1 text-primary">Featured Project</h2>
              <Project
                type="Web Application"
                title="AI ChatBot (In Progress)"
                summary="The primary focus of the application is to create a responsive AI ChatBot using ChatGPT API Keys. Throughout the development process, I utilized my programming skills in Nextjs, Supabase, JavaScript, TypeScript and CSS."
                github=""
              />
            </div>
            <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-xl mb-1 text-primary">Featured Project</h2>
              <Project
                type="Mobile Application"
                title="Food Delivery System"
                summary="The primary focus of the application is food online ordering, reservations management, delivery employees and menu management. Throughout the development process, I utilized my programming skills in React Native, Supabase, JavaScript, TypeScript and CSS."
                github=""
              />
            </div>
            <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-xl mb-1 text-primary">Featured Project</h2>
              <Project
                type="Desktop Application"
                title="Employement System"
                summary="The primary focus of the application is to manage job applications and emplyoment. Throughout the development process, I utilized my programming skills in Java."
                github=""
              />
            </div>
            <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-xl mb-1 text-primary">Featured Project</h2>
              <Project
                type="Desktop Application"
                title="Transporation Ticketing System"
                summary="The primary focus of the application is transportation ticketing. Throughout the development process, I utilized my programming skills in Python."
                github=""
              />
            </div>
            <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-xl mb-1 text-primary">Featured Project</h2>
              <Project
                type="Desktop Application"
                title="Banking System"
                summary="The primary focus of the application is Banking system. Throughout the development process, I utilized my programming skills in Python."
                github=""
              />
            </div>
            <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
              <h2 className="font-bold text-xl mb-1 text-primary">Featured Project</h2>
              <Project
                type="Desktop Application"
                title="Grade Transcript Generator System"
                summary="The primary focus of the application is generating grade transcript. Throughout the development process, I utilized my programming skills in C."
                github=""
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
