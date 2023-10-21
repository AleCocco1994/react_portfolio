import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import TwitterIcon from './Icons';
import { motion } from "framer-motion" 

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();

    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
                    h-[1px] inline-block w-full bg-dark 
                    absolute left-0 -bottom-0.5 
                    group-hover:w-full 
                    transition-[width] ease duration-300 
                    ${router.asPath === href ? 'w-full' : 'w-0'} 
                    `}>
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header
        className="w-full px-32 py-8 font-medium flex justify-between items-center"
        >
            <nav>
                <CustomLink href="/"         title="Home" className='mr-4'/>
                <CustomLink href="/about"    title="About" className='mx-4'/>
                <CustomLink href="/contacts" title="Contacts" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='mx-4'/>
                <CustomLink href="/articles" title="Articles" className='ml-4'/>
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://twitter.com" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mr-3">
                    <TwitterIcon/>
                </motion.a>

                <motion.a href="https://twitter.com" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3">
                    <TwitterIcon/>
                </motion.a>

                <motion.a href="https://twitter.com" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3">
                    <TwitterIcon/>
                </motion.a>

                <motion.a href="https://twitter.com" target={"_blank"}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 ml-3">
                    <TwitterIcon/>
                </motion.a>

            </nav> 
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <div className="flex items-center justify-center mt-2">
                <Link
                    href="/"
                    className="w-16 h-16 bg-dark text-light flex items-center 
                            justify-center rounded-full text-5x1 font-bold"
                    whileHover={{
                    backgroundColor: [
                    "#121212",
                    "rgba(131,58,180,1)",
                    "rgba(253,29,29,1)",
                    "rgba(252,176,69,1)",
                    "rgba(131,58,180,1)",
                    "#121212",
                    ],
                    transition: { duration: 1, repeat: Infinity},
                    }}
                    >AC</Link>
                </div> 
            </div>
        </header>
    )
}

export default NavBar
