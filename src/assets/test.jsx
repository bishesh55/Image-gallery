import React,{useState, useEffect} from 'react'
import ImgCard from './ImgCard'
import ImageSearch from './ImageSearch'

function Test() {
    const[img,setImg]=useState([])
    const[isLoading,setIsloading]=useState(true)
    const[term,setTerm]=useState('')
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res=>res.json())
        .then(data=>{
            setImg(data.hits);
            console.log(data)
            setIsloading(false);
        })
        .catch(err=>console.log(err));
    },[term]);
    
  return (
    <>
    <div className="wid-100">
        <ImageSearch searchText={(text)=>{setTerm(text)}}/>
    {isLoading ?<h1 className='text-6xl text-center'>Loading....</h1>:<div className="wid-100 image-container">
    {img.map(image=>
    <ImgCard key={image.id} image={image}/>
        )}
    </div>}
    </div>
    </>
  )
}

export default Test
