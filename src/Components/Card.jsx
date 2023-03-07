import React from 'react'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { db } from '../firebase-config'
import { arrayUnion,doc,updateDoc } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'

const Card = ({item}) => {
    const [like, setLike] = useState(false)
    const [saved,setSaved] = useState(false)
    const {user} = UserAuth()

    const movieID = doc(db,'users',`${user?.email}`)

    const saveShow = async () => {
        if(user?.email){
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID,{
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img : item.backdrop_path,
                })
            })
        } else {
            alert("Please Log in to save a movie")
        }
    }

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-auto inline-block cursor-pointer p-2 relative'>
            <img className='w-full h-auto block rounded-md'
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title} />
            <div className='top-0 left-0 w-full h-full absolute hover:bg-black/70 opacity-0 hover:opacity-100 text-white flex justify-center items-center'>
                <p className='font-bold md:text-sm text-xs'>{item?.title}</p>
                <p onClick={saveShow}>
                    {like ? 
                    <FaHeart className='absolute top-4 left-4 text-gray-300' />
                     :
                    <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                </p>
            </div>
        </div>
    )
}

export default Card