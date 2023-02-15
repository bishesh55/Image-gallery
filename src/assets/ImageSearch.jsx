import React, { useState } from 'react'

function ImageSearch({searchText}) {
  const [text,setText]=useState('')
 
  const onSubmit=(e)=>{
    e.preventDefault()
    searchText(text)
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="search-container">
          <div className='space-container'>


        <input type="text" className=' '  onChange={(e)=>{setText(e.target.value)}}/>
        <div className='submit-container'>

        <button className='submit-button'>Submit</button>
        </div>
          </div>
        </div>
        
       
       
      </form>
    </div>
  )
}

export default ImageSearch
