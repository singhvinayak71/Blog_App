import React from "react";
// import { Header } from "../components/Header";
import BlogCard from "../Components/BlogCard";
import "../style/homePage.css"

const HomePage=({blogData})=>{
    return(
        <div id="HomePage">
        
            <div id="blogParent">
             {
                blogData.map((e)=>{
                    return <BlogCard img={e.img} desc={e.desc} title={e.title}/>
                    // </>
                })
             }
          
            </div>
        </div>
    )
}

export default HomePage;