import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { requests } from '../requests'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.popular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    console.log(movie)

    const truncateString = (str,num) => {
        if(str?.length > num)
        return str.slice(0, num) + '...'

        else return str
    }


    return (
        <div className='top-0  w-full md:h-[550px] h-[350px] text-white'>
            <div className='w-full h-full'>
                <div className='w-full md:h-[550px] h-[350px] bg-gradient-to-r from-black absolute '></div>
                <img
                    className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} 
                    alt={movie?.title} />
                <div className='w-full md:top-[20%] top-[10%] p-4 md:p-8 absolute'>
                    <h1 className='text-white font-bold text-2xl'>{movie?.title}</h1>
                    <div className='flex gap-2 mt-2'>
                        <button className='bg-white text-black px-3 py-1  font-semibold'>
                            Play</button>
                        <button className=' border font-semibold px-3 py-1'>
                            Watch Later</button>
                    </div>
                    <p className='text-gray-400 text-xs mt-2'>
                        Released : {movie?.release_date}
                    </p>
                    <p className='text-sm mt-2 md:w-[50%] w-[80%] text-gray-300'>
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main