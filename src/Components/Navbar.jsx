import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

const Navbar = () => {
    const navigate = useNavigate()
    const {user,logOut} = UserAuth()

    const handleLogout = async () => {
        try{
            await logOut()
            navigate('/')
        }catch (err){
            console.log(err)
        }
    }

  return (
    <div className="flex justify-between items-center p-2 z-50 absolute w-full">
    <div className='font-semibold text-2xl text-red-500'>
       <Link to='/'>Netflix</Link> 
    </div>
        {user?.email ? 
    <div>
        <Link to='/account'>
        <button className="border-none font-bold px-3 py-1 text-white">
            Account</button>
        </Link>
        <button 
        onClick={handleLogout}
        className="border-2 font-semibold px-3 py-1 ml-2 bg-red-600 text-white border-red-600">
            LogOut</button>
    </div>
        : 
    <div>
        <Link to='/signUp'>
        <button className="border-none font-bold px-3 py-1 text-white">
            Sign Up</button>
        </Link>
        <Link to='/signIn'>

        <button className="border-2 font-semibold px-3 py-1 ml-2 bg-red-600 text-white border-red-600">
            Sign In</button>
        </Link>
    </div>}
        

    </div>
  )
}

export default Navbar