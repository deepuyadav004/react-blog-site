import React from 'react'
import './write.css'


export default function Write() {
  return (
    <div className='write'>
        <img 
            className='writeImg'
            src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'
            alt=''
        />
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'>
                    <i className='writeIcon fas fa-plus'></i>
                </label>
                <input type='file' id='fileInput' style={{display:"none"}} />
                <input type='text' placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className='writeFormGroup'>
                <textarea
                  placeholder='Tell your story....'
                  type='text'
                  className='writeInput writeText'
                ></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  );
}
