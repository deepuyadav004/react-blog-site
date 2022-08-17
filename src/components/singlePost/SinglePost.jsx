// import React from 'react'
import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img 
                src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
                alt=''
                className='singlePostImg'
            />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet.
                <div className='singlePostEdit'>
                    <i className='singlePostIcon far fa-edit'></i>
                    <i className='singlePostIcon far fa-trash-alt'></i>
                </div>
            </h1>
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>
                    Author: <b>Deepu</b>
                </span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
            
            </p>
        </div>
    </div>
  )
}
