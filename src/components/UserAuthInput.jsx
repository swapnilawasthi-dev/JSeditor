import React, { useState } from 'react'
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const UserAuthInput = ({label, placeHolder, isPass, key, setStateFunction, Icon}) => {
    const [value, setValue] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [isValid, setIsValid] = useState(true)

    const handleTextChange = (e) => {
        setValue(e.target.value);
        setStateFunction(e.target.value);

        if(key === "Email"){
            const emailRegex = /^[^\$@]+@[^\$@]+\.[^\$@]+$/
            const status = emailRegex.test(value);
        }
    }

  return (
    <div className=' flex flex-col items-start justify-start gap-1'>
        <label className=' text-sm text-gray-300'>Email</label>
        <div className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200`}>
            <Icon className=' text-text555 text-2xl' />
            <input
                type={isPass ? "password" :"text"}
                placeholder={placeHolder}
                className=' flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-text555 text-lg'
                value={value}
                onChange={handleTextChange}
            />

            {isPass && (
                <motion.div onClick={() => setShowPass(!showPass)} whileTap={{scale: 0.95}} className='cursor-pointer'>
                    { showPass ? (
                        <FaEyeSlash className=' text-text555 text-2xl' />
                        ) : (
                            <FaEye className=' text-text555 text-2xl' />
                        )
                    }
                </motion.div> 
            )}   
        </div>
    </div>
  )
}

export default UserAuthInput