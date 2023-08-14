import React from 'react'
// import { Header } from '../Components/Header'
import BlockCard from '../Components/BlogCard';
import '../style/homePage.css'

const HomePage = () => {
  return (
    <div id='HomePage'>
        {/* <Header/> */}
        <div id="blogParent">
            <BlockCard/>
            <BlockCard/>
            <BlockCard/>
            <BlockCard/>
            <BlockCard/>
            <BlockCard/>
        </div>
    </div>
    
  )
}

export default HomePage;