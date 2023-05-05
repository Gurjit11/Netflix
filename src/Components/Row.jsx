import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import {MdChevronRight,MdChevronLeft } from 'react-icons/md'

const Row = ({ title, fetchURL, id }) => {
    const [movies, setMovies] = useState([])
   

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])


    const slideLeft = () => {
        var slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + id)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                onClick={slideLeft}
                className='bg-white rounded-full absolute group-hover:block opacity-50 hover:opacity-90 left-0 hidden md:text-4xl text-2xl cursor-pointer  z-20'/>
                <div id={`slider`+ id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies?.map((item, id) => (
                        <Card item={item} key={id} />
                    ))}
                </div>
                <MdChevronRight 
                onClick={slideRight}
                className='bg-white rounded-full absolute group-hover:block opacity-50 hover:opacity-90 right-0 hidden md:text-4xl text-2xl cursor-pointer z-20'/>
            </div>
        </>
    )
}

export default Row
