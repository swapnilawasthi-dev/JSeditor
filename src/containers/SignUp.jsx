import React, { useState } from 'react'
import logo from '../../public/logo.png'
import { UserAuthInput } from '../components'
import { FaEnvelope, FaGithub } from 'react-icons/fa6';
import { MdPassword } from 'react-icons/md';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getEmailValidationStatus, setGetEmailValidationStatus] = useState(false);
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className='w-full py-6 '>
        <img 
            src={logo}
            className='object-contain w-32 opacity-50 h-auto'
            alt=""
        />

        <div className=' w-full flex flex-col items-center justify-center py-2'>
          <p className=' py-6 text-2xl text-primaryText'>Join With Us!</p>
          
          <div className=' px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-6'>
            {/* email */}
              <UserAuthInput label="Email" placeHolder="Type Email Here" isPass={false} key="Email" setGetEmailValidationStatus={setGetEmailValidationStatus} setStateFunction={setEmail} Icon={FaEnvelope}  />

            {/* password */}
              <UserAuthInput label="Password" placeHolder="Type Password Here" isPass={true} key="Password" setStateFunction={setPassword} Icon={MdPassword}  />

            {/* alert */}

            {/* login button */}
              { !isLogin ? (<motion.div whileTap={{scale: 0.95}} className='flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-300'>
                <p className=' text-xl text-white'>Sign Up</p>
              </motion.div>) : (
                <motion.div whileTap={{scale: 0.95}} className='flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-300'>
                <p className=' text-xl text-white'>Login</p>
              </motion.div>
              )}

            {/* account text */}  

              {!isLogin ? (<p className='text-sm text-primaryText flex items-center justify-center gap-3'>
                Already have an account !{""}
                <span onClick={() => setIsLogin(!isLogin)} className='text-emerald-500 cursor-pointer'>Login Here</span>
              </p>) : (
              <p className='text-sm text-primaryText flex items-center justify-center gap-3'>
                Don't have an account !{""}
                <span  onClick={() => setIsLogin(!isLogin)} className='text-emerald-500 cursor-pointer'>Create Here</span>
              </p>
              )}

            {/* or section */}

              <div className='flex items-center justify-center gap-12'>
                <div className=' h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24  '></div>
                <p className='text-sm text-[rgba(256,256,256,0.2)]'>OR</p>
                <div className=' h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24  '></div>
              </div>


            {/* sign in with google */}

              <motion.div whileTap={{scale: 0.95}} className=' flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer '>
                <FcGoogle className='text-3xl' />
                <p className=' text-xl text-white'>Sign in with Google</p>
              </motion.div>

            {/* or section */}

            <div className='flex items-center justify-center gap-12'>
                <div className=' h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24  '></div>
                <p className='text-sm text-[rgba(256,256,256,0.2)]'>OR</p>
                <div className=' h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24  '></div>
              </div>

            {/* sign in with github */}

              <motion.div whileTap={{scale: 0.95}} className=' flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] cursor-pointer '>
                <FaGithub className='text-3xl' />
                <p className=' text-xl text-white'>Sign in with Github</p>
              </motion.div>
          </div>
        </div>
    </div>
  )
}

export default SignUp