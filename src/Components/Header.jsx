import React from 'react'
import '../style/header.css'

export const Header = () => {
  return (
    <div id='Header'>
        <h1>MyBlog</h1>
        <div>
            <button>Home</button>
            <button>Blogs</button>
            <button>Add Blog</button>
        </div>
        {/* i am header */}
    </div>
  )
}
