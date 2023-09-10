import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import  HomePage  from "../Pages/HomePage";
import { AddBlog } from "../Pages/AddBlog";


const CustomRoutes=()=>{
    const[blogData,setBlogData]=useState([
        {title:"Blog 1",img:"https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",desc:"desc1"},
        {title:"Blog 2",img:"https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.670xw:1.00xh;0.247xw,0&resize=1200:*",desc:"desc2"},
    ])
    return(
        <Routes>
                <Route path="/" element={<HomePage blogData={blogData}/>}/>
                <Route path="/addblog" element={<AddBlog prevData={blogData} updateData={setBlogData}/>}/>
        </Routes>
    )
}

export default CustomRoutes;