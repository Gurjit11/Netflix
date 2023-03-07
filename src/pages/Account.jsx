import React from 'react'
import SavedShows from '../Components/SavedShows'

const Account = () => {
  return (
    <div className='bg-black'>
      <div className='top-0  w-full md:h-[450px] h-[250px] text-white'>
        <div className='w-full h-full'>
          <div className='text-white top-0 left-0 absolute w-full md:h-[450px] h-[250px] z-10 text-3xl font-extrabold flex items-center p-4 md:p-8'>My Shows</div>
          <div className='w-full md:h-[450px] h-[250px] bg-gradient-to-r from-black absolute '></div>
          <img
            className='w-full h-full object-cover'
            src={`https://wallpaperaccess.com/full/3658604.jpg`}
            alt='logo' />
        </div>
      </div>
      <SavedShows />
    </div>
  )
}

export default Account