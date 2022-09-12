import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const MultipleSending = () => {
  const[files,setFiles]=useState([]);
  const[imageURLs,setImageURLs]=useState([])
  const PATH_URL = "https://localhost:8000/uploaddufichiers";

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
    .then((res)=>{
      alert("fichier envoyer")
      console.log(res);
      window.history.go()
    })
    .catch((err)=>{
      console.log("err",err.response.data);
      alert("fichier n'a pas été envoyer")
    })
  };

  return (
    <div className='upload'>
      <h1>Envoyer vos images</h1>
      <div className='btn-link'><Link className='link' to="/">Retour</Link></div>
      {files.map((img,i)=><li key={i} >{img.name}</li>)}
      <form className='upload-form' onSubmit={(e)=>handleSubmit(e)} >
      <input className='btn-input' type="file" onChange={(e)=>onImageChange(e)} multiple/>
      {imageURLs.map(imageSrc =><img className='images' key={imageSrc} src={imageSrc} alt={imageSrc.name}/>  )}
      <button className='btn-upload' type="submit" > envoyer </button>
      </form>
      <div className='btn-link'><Link className='link' to="/view">Voir vos images</Link></div>
    </div>
  );
};

export default MultipleSending;
