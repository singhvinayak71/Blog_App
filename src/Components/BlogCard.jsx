import React from 'react'
import '../style/blogCard.css'

const BlockCard = () => {
  return (
    <div className='blogCard'>
        <img src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?w=2000" alt="img1" />
        <h1>Blog title: Here we be your blogtitle</h1>
        <p>
            Blog Description: here will be writing your description
        </p>
        <button>Read Blog</button>
        <button>Edit Blog</button>
        <button>Delete Blog</button>
    </div>
  )
}

export default BlockCard