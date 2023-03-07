import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'
import { db } from '../firebase-config'
import { updateDoc,doc,onSnapshot } from 'firebase/firestore'
import { AiOutlineClose } from 'react-icons/ai'

const SavedShows = () => {
    const [movies,setMovies] = useState([])
    const {user} = UserAuth()

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users' , `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows)
        })
    },[user?.email])

    const movieRef = doc(db,'users' , `${user?.email}`)
    const deleteShow = async (passedId) => {
        try{
            const result = movies.filter((item) => item.id !== passedId)
            await updateDoc(movieRef, {
                savedShows: result,
            })
        }catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='relative flex items-center group'>
            <MdChevronLeft
                onClick={slideLeft}
                className='bg-white rounded-full absolute group-hover:block opacity-50 hover:opacity-90 left-0 hidden md:text-4xl text-2xl cursor-pointer  z-20' />
            <div id={`slider`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies?.map((item) => (
                    <div key={item?.id} className='w-[200px] md:w-[240px] lg:w-[280px] h-auto inline-block cursor-pointer p-2 relative'>
                        <img className='w-full h-auto block rounded-md'
                            src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                            alt={item?.title} />
                        <div className='top-0 left-0 w-full h-full absolute hover:bg-black/70 opacity-0 hover:opacity-100 text-white flex justify-center items-center'>
                            <p className='font-bold md:text-sm text-xs'>{item?.title}</p>
                            <p 
                            onClick={() => deleteShow(item.id)}
                            className='absolute text-gray-300 top-4 right-4'>
                                <AiOutlineClose/>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <MdChevronRight
                onClick={slideRight}
                className='bg-white rounded-full absolute group-hover:block opacity-50 hover:opacity-90 right-0 hidden md:text-4xl text-2xl cursor-pointer z-20' />
        </div>
    )
}

export default SavedShows