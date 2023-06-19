import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { LinkArrow } from '@/components/Icons'

const Certificate = ({ type, title, Description}) => {
  return (
        <article className="first:mt-0 last:mb-0 w-[60%] mx-auto">
        <div>
            <h3 className="capitalize font-bold text-2xl mb-2 underline">{title}</h3>
            <h2 className="capitalize font-semibold mb-2 text-dark">Provided by: {type}</h2>
            <p className='mb-6 font-medium text-dark/75'>{Description}</p>
        </div>
        </article>
  );
};

const Certificates = () => {
  return (
    <>
      <Head>
        <title>Certificates</title>
      </Head>

      <main className="w-full mb-36 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagine, Code, Succeed." />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12"></div>
                <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
                <h2 className="font-bold text-xl mb-1 text-primary">Earned Certificate</h2>
                <Certificate
                    type="IBM"
                    title="Full Stack Software Developer Assessment"
                    Description="I learnt concepts in cloud computing, common technologies related to full-stack, front-end and back-end application development, and analysis and troubleshooting of different issues in software design and development. "
                />
                <div className="flex items-center mt-4 justify-center">
                    <Link href="/FullStackSoftwareDeveloperAssessment.pdf" target="_blank" download>
                    <h className="flex items-center bg-dark text-light px-4 py-2 rounded-lg shadow-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark">
                        <span>View</span>
                        <LinkArrow className="h-5 ml-2" />
                    </h>
                    </Link>
                </div>
                </div>
                <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
                <h2 className="font-bold text-xl mb-1 text-primary">Earned Certificate</h2>
                <Certificate
                    type="Google"
                    title="Foundations of Cybersecurity"
                    Description="I learnt about security ethics, and core skills and knowledge needed to become a cybersecurity analyst. I learnt how security attacks impact business operations, and the common tools used by cybersecurity analysts to face these attacks."
                />
                <div className="flex items-center mt-4 justify-center">
                    <Link href="/FoundationsofCybersecurity.pdf" target="_blank" download>
                    <h className="flex items-center bg-dark text-light px-4 py-2 rounded-lg shadow-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark">
                        <span>View</span>
                        <LinkArrow className="h-5 ml-2" />
                    </h>
                    </Link>
                </div>
                </div>
                <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
                <h2 className="font-bold text-xl mb-1 text-primary">Earned Certificate</h2>
                <Certificate
                    type="Meta"
                    title="Android App Capstone"
                    Description="I learnt how to build android applications and style a user interface (UI) using fragments and views while demonstrating a clean and bug free coding while keeping an eye on optimization."
                />
                <div className="flex items-center mt-4 justify-center">
                    <Link href="/AndroidAppCapstone.pdf" target="_blank" download>
                    <h className="flex items-center bg-dark text-light px-4 py-2 rounded-lg shadow-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark">
                        <span>View</span>
                        <LinkArrow className="h-5 ml-2" />
                    </h>
                    </Link>
                </div>
                </div>
                <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
                <h2 className="font-bold text-xl mb-1 text-primary">Earned Certificate</h2>
                <Certificate
                    type="Meta"
                    title="Introduction to Front-End Development"
                    Description="I learnt the benefits of working with UI frameworks and how to create and style a user interface with HTML and CSS."
                />
                <div className="flex items-center mt-4 justify-center">
                    <Link href="/IntroductiontoFront-EndDevelopment.pdf" target="_blank" download>
                    <h className="flex items-center bg-dark text-light px-4 py-2 rounded-lg shadow-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark">
                        <span>View</span>
                        <LinkArrow className="h-5 ml-2" />
                    </h>
                    </Link>
                </div>
                </div>
                <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
                <h2 className="font-bold text-xl mb-1 text-primary">Earned Certificate</h2>
                <Certificate
                    type="Meta"
                    title="Programming with JavaScript"
                    Description="I learnt how to code with Javascript, write unit tests using Jest, and create and manipule objects and arrays."
                />
                <div className="flex items-center mt-4 justify-center">
                    <Link href="/ProgrammingwithJavaScript.pdf" target="_blank" download>
                    <h className="flex items-center bg-dark text-light px-4 py-2 rounded-lg shadow-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark">
                        <span>View</span>
                        <LinkArrow className="h-5 ml-2" />
                    </h>
                    </Link>
                </div>
                </div>
                <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
                <h2 className="font-bold text-xl mb-1 text-primary">Earned Certificate</h2>
                <Certificate
                    type="Meta"
                    title="Principles of UX and UI Design"
                    Description="I learnt the fundamentals of User Experience (UX) design and research as well as how to create wireframes and prototypes in Figma."
                />
                <div className="flex items-center mt-4 justify-center">
                    <Link href="/UX.pdf" target="_blank" download>
                    <h className="flex items-center bg-dark text-light px-4 py-2 rounded-lg shadow-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark">
                        <span>View</span>
                        <LinkArrow className="h-5 ml-2" />
                    </h>
                    </Link>
                </div>
                </div>
                <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
                <h2 className="font-bold text-xl mb-1 text-primary">Earned Certificate</h2>
                <Certificate
                    type="Coursera"
                    title="TypeScript Control Structures"
                    Description="I learnt how to code with Typescript and understand control structures of TypeScript programming."
                />
                <div className="flex items-center mt-4 justify-center">
                    <Link href="/TypeScriptControlStructures.pdf" target="_blank" download>
                    <h className="flex items-center bg-dark text-light px-4 py-2 rounded-lg shadow-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark">
                        <span>View</span>
                        <LinkArrow className="h-5 ml-2" />
                    </h>
                    </Link>
                </div>
                </div>
                <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
                <h2 className="font-bold text-xl mb-1 text-primary">Earned Certificate</h2>
                <Certificate
                    type="Coursera"
                    title="Modern JavaScript ES6 Basics"
                    Description="I learnt about the new update of Javascript programming language."
                />
                <div className="flex items-center mt-4 justify-center">
                    <Link href="/ES6.pdf" target="_blank" download>
                    <h className="flex items-center bg-dark text-light px-4 py-2 rounded-lg shadow-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark">
                        <span>View</span>
                        <LinkArrow className="h-5 ml-2" />
                    </h>
                    </Link>
                </div>
                </div>
                <div className="col-span-6 bg-white rounded-lg shadow-lg p-6">
                <h2 className="font-bold text-xl mb-1 text-primary">Earned Certificate</h2>
                <Certificate
                    type="Coursera"
                    title="Create Your First Web App with Python and Flask"
                    Description="I learnt how to create Web Applications with Flask, use templates in Flask applications, and use WTForms and SQLAlchemy in Flask applications."
                />
                <div className="flex items-center mt-4 justify-center">
                    <Link href="/PythonFlask.pdf" target="_blank" download>
                    <h className="flex items-center bg-dark text-light px-4 py-2 rounded-lg shadow-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark">
                        <span>View</span>
                        <LinkArrow className="h-5 ml-2" />
                    </h>
                    </Link>
                </div>
                </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Certificates;
