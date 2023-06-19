import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({position,company, companyLink, time, address, work})=>{
    const ref = useRef(null)
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <div>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </div>
        </li> 
    );
}
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
  return (
    <div className='my-64 bg-slate-200 shadow-lg rounded-lg p-8'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0.5 w-[4px] h-full bg-dark origin-top'/>
            <ul>
                    <Details position="Software Developer Intern" company="Lesieur Cristal" companyLink="https://www.lesieur-cristal.com/" time="Summer 2022" address="Casablanca, MOROCCO" work="During my internship at Lesieur Cristal, I had the opportunity to observe and learn about the inner workings of the IT department. I closely watched how the department operates, how they run the place, and the different types of work they undertake. I gained valuable insights into the day-to-day activities of the IT department, including their project management processes, collaboration methods, and problem-solving approaches. In addition to observing, I was also assigned programming tasks with the aim of enhancing my coding abilities. These tasks allowed me to apply my theoretical knowledge of programming languages and frameworks in a practical setting. I received guidance and support from the IT team, who provided valuable feedback on my coding practices. This hands-on experience and exposure to real-world software development processes were invaluable in shaping my skills and knowledge as a software developer. "/>
                    <Details position="Software Developer Intern" company="Centrelec" companyLink="http://centrelec.ma/" time="Summer 2023" address="Casablanca, MOROCCO" work="During my internship as a Software Developer Intern at Centrelec, I had the opportunity to develop a mobile and web application that encompassed various functionalities. The primary focus of the application was to manage tasks and implement a ticketing system. I designed and developed features that allowed users to create, assign, and track tasks within the application. Additionally, I implemented a ticketing system to streamline internal communication and issue resolution processes. In addition to task management and ticketing, I also integrated a module for purchases and budget management within the existing database. This involved creating functionality for users to track purchases, manage budgets, and generate relevant reports based on the data available in the system. Throughout the development process, I utilized my programming skills in [mention relevant programming languages] to create responsive and user-friendly interfaces for both the mobile and web platforms. I worked closely with the development team, collaborating on design decisions, implementing best practices, and ensuring the application met the required specifications. To enhance the functionality and usability of the application, I incorporated appropriate frameworks and technologies such as [mention relevant frameworks or technologies]. I also integrated security measures to protect user data and ensure data privacy."/>
            </ul>
        </div>
    </div>
  )
}

export default Experience