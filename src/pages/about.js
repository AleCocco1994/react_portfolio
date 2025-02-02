import Head from "next/head";
import React, {useRef, useEffect } from "react";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/profile/xv15_v7-removebg.png"; 
import {useInView, useSpring, useMotionValue } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const AnimatedNumber = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration : 5000 })
const isInView = useInView(ref, {once: true});

// counter animation

useEffect(() => {
    if(isInView){
        motionValue.set(value)
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on('change', (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0)
        }
    })
}, [springValue, value]) 

    return <span ref={ref}></span> 

}


const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="About Page" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center pt-16">
                <div className="w-full h-full z-0 bg-light px-32 pt-16"> 
                    <AnimatedText text=" Passion Fuels Purpose! " className="mb-16" />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75"> 
                                About Me
                            </h2>
                            <p className="my-4 font-medium">
                                Hi, I&#39m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                                new and innovative ways to bring my clients&#39 visions to life.
                            </p>
                            <p className="my-4 font-medium">
                                I believe that design is about more than just making things look pretty -it&#39s about solving problems and 
                                creating intuitive, enjoyable experiences for users. 
                            </p>
                            <p className="my-4 font-medium">
                                Whether I&#39m working on a website, mobile app, or 
                                other digital product, I bring my commitment to design excellence and user-centered thinking to 
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-4 border-solid border-blue-500/50 bg-blue-900 p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-blue-800/70"/>
                                <Image src={profilePic} alt="CodeBucks" className='w-full h-auto rounded-2xl'/>    
                        </div>
                        <div className="col-span-2 flex flex-col item-end justify-between ">
                            <div className="flex flex-col items-end justify-center ">
                                <span className="inline-block text-7xl font-bold">
                                    <AnimatedNumber value={15}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 "> Releases</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center ">
                                <span className="inline-block text-7xl font-bold">
                                <AnimatedNumber value={150}/>+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 "> Forum Users</h2>    
                            </div>
                            <div className="flex flex-col items-end justify-center ">
                                <span className="inline-block text-7xl font-bold text-dark">
                                <AnimatedNumber value={4} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 "> years of experience</h2>   
                            </div>
                        </div>
                    </div>
                    <Skills/>
                    <Experience/>
                </div>
            </main>
        </>
    )
}

export default About;