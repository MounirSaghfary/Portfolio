import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon';

const Details = ({position,school, schoolLink, time, address, major, minor})=>{
    const ref = useRef(null)
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <div>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={schoolLink}>@{school}</a></h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                {minor === "no minor" &&(
                    <p className='font-medium w-full'>
                         Major: {major}
                    </p>
                )}
                {minor !== "no minor" &&(
                    <p className='font-medium w-full'>
                         Major: {major} || Minor: {minor}
                    </p>
                )}
            </div>
        </li> 
    );
}
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
  return (
    <div className='my-64 bg-violet-100 shadow-lg rounded-lg p-8'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0.5 w-[4px] h-full bg-dark origin-top'/>
            <ul>
                    <Details position="International Baccalaureat" school="Newton International School" schoolLink="http://nischool.org/" time="2020 - 2021" address="Mohammedia, MOROCCO" major="Physics" minor="no minor"/>
                    <Details position="Bachelor of Science" school="Al Akhawayn University Ifrane" schoolLink="http://www.aui.ma/en/" time="2021 2025" address="Ifrane, MOROCCO" major="Computer Science" minor="Business Administration"/>
            </ul>
        </div>
    </div>
  )
}

export default Education