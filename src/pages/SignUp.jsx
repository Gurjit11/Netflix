import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
    const navigate = useNavigate()
    const {signUp} = UserAuth()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signUp(email, password)
            navigate('/')
        } catch(err){
            console.log(err)
            setError(err.message)
        }
    }

    return (
        <div className='w-full h-screen'>
            <img
                className='absolute w-full h-full object-cover'
                src='https://wallpaperaccess.com/full/329633.jpg'
                alt='/' />
            <div className='absolute w-full h-full bg-black/60'></div>

            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white' >
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        {error && <p className='mt-4 bg-red-500 p-1'>{error} 
                        <span onClick={() => setError('')} className='font-bold ml-3 cursor-pointer'>X</span>
                        </p>}
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input
                            onChange={(e) => setEmail(e.target.value)}
                                className='border-none bg-gray-700 mt-2 p-3 w-full text-md rounded'
                                type='email'
                                placeholder='Email'
                                autoComplete='email' />
                            <input
                            onChange={(e) => setPassword(e.target.value)}
                                className='border-none bg-gray-700 mt-2 p-3 w-full text-md rounded'
                                type='password'
                                placeholder='Password'
                                autoComplete='current-password' />
                            <button className='w-full rounded bg-red-500 font-bold my-6 py-3'>
                                Sign Up
                            </button>
                            <div className='flex justify-between items-center text-sm text-gray-500'>
                                <p>
                                    <input type='checkbox' className='mr-2' />
                                    Remember me
                                </p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-6'>
                                <span className='text-gray-500'>
                                    Already subscribed to Netflix?
                                </span>{' '}
                                <Link to='/signIn'>Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp