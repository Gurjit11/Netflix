import React from 'react'
import Main from '../Components/Main'
import { requests } from '../requests'
import Row from '../Components/Row'

const Home = () => {
  return (
    <div className='bg-black'>
    <Main/>
    <Row id={1} title = 'UpComing' fetchURL = {requests.upcoming}/>
    <Row id={2} title = 'Popular' fetchURL = {requests.popular}/>
    {/* <Row id={1} title = 'Latest' fetchURL = {requests.latest}/> */}
    <Row id={4} title = 'TopRated' fetchURL = {requests.top_rated}/>
    {/* <Row id={1} title = 'UpComing' fetchURL = {requests.upcoming}/> */}
    </div>
  )
}

export default Home