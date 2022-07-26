import React, { useEffect, useState } from 'react';
import axios from "axios";

const MultipleSending = () => {
  const[files,setFiles]=useState([]);
  const[imageURLs,setImageURLs]=useState([])
  const PATH_URL = "http://localhost:8000/uploaddufichiers";

  useEffect(()=>{
    if (files.length<1)return;
    const NewImageUrls=[];
    files.forEach(image => NewImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(NewImageUrls);
    
  },[files]);

  const onImageChange =(e)=>{
    setFiles([...e.target.files]); 
  };

  const handleSubmit =(e)=>{
    e.preventDefault()
    const formData = new FormData();
    files.forEach(file=>{
      formData.append("files", file);
    });
    axios({
      method: "post",
      url: PATH_URL,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res)=>console.log("res",res))
    .catch((err)=>alert(err.response.data))
  };

  return (
    <div>
      <h1>multiple envoie</h1>
      {files.map((img,i)=><li key={i} >{img.name}</li>)}
      <form onSubmit={(e)=>handleSubmit(e)} >
      <input type="file" onChange={(e)=>onImageChange(e)} multiple/>
      {imageURLs.map(imageSrc =><img key={imageSrc} src={imageSrc} alt={imageSrc.name}/>  )}
      <button type="submit" > envoyer </button>
      </form>
    </div>
  );
};

export default MultipleSending;
