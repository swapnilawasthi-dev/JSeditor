import React, { useState } from 'react';
import { HiChevronDoubleLeft } from 'react-icons/hi2';
import { MdHome } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png'

const Home = () => {
    const [isSideNav, setIsSideNav] = useState(false);
    const [user, setUser] = useState(['name']);

  return (
    <>
        <div className={`w-2 ${
            isSideNav ? 'w-2' : 'flex-[.2] xl:flex-[.2]'
            } min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out`}>
                {/* anchor */}
                    <motion.div 
                        whileTap={{scale: 0.9}}
                        onClick={() => setIsSideNav(!isSideNav)} 
                        className='w-8 h-8 bg-secondary rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer'
                    >
                        <HiChevronDoubleLeft className="text-white text-xl" />
                    </motion.div>


                {/* logo */}
                    <div className='overflow-hidden w-full flex flex-col gap-4'>
                        <Link to={'/home'}>
                            <img src={logo} className='object-contain w72'  alt='logo'/>
                        </Link>
                    </div>


                {/* open editor */}
                    <Link to={'/newProject'}>
                        <div className='px-6 py-3 flex items-center justify-center rounded-xl border border-gray-100 cursor-pointer group hover:border-gray-200'>
                            <p className='text-gray-400 group-hover:text-gray-200 capitalize'>Start Coding</p>
                        </div>
                    </Link>


                {/* home navigation  */}

                {
                    user && (
                        <Link to={'/home/projects'} className='flex items-center justify-center gap-2'>
                            <MdHome className='text-primaryText text-xl' />
                            <p className='text-lg text-primaryText'>Home</p>
                        </Link>
                    )
                        
                    
                }
        
        </div>
    </>
  )
}

export default Home