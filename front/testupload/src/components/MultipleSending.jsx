import React, { useEffect, useState } from 'react';
import axios from "axios";

const MultipleSending = () => {
  const[files,setFiles]=useState([]);
  const[selectFiles,setSelectFiles]=useState([]);
  const[imageURLs,setImageURLs]=useState([])
  const PATH_URL = "http://localhost:8000/uploaddufichiers";

  useEffect(()=>{
    if (files.length<1)return;
    const NewImageUrls=[];
    files.forEach(image => NewImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(NewImageUrls)
  },[files])

  const onImageChange =(e)=>{
    setFiles([...e.target.files]); 
    setSelectFiles(e.target.files[0])
    console.log("0",files,selectFiles);
    
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("files",selectFiles);
    console.log("1",formData);
    axios({
      method: "post",
      url: PATH_URL,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res)=>console.log("err",res))
    .catch((err)=>console.log("err1",err))
  }

  
  return (
    <div>
      <h1>multiple envoie</h1>
      {files.map((img,i)=><li key={i} >{img.name}</li>)}
      <form onSubmit={(e)=>handleSubmit(e)} >
      <input type="file" onChange={onImageChange} multiple/>
      {imageURLs.map(imageSrc =><img key={imageSrc} src={imageSrc} alt={imageSrc.name}/>  )}
      <button type="submit" > envoyer </button>
      </form>
    </div>
  );
};

export default MultipleSending;
/*   const[value,setValue]=useState([]);
  const handleChange =(e)=>{
    const formData = [...e.target.files]
    setValue(formData);
    console.log(formData.map(i=>i.name));
  }
  const handleSubmit =(e)=> {
    alert(
      `Fichier sélectionné - ${fileInput.current.files[2].name}`
    ); 
  }
  
  return (
    <div>
      <h1>multiple envoie</h1>
      {value.map((img,i)=><li key={i.id} >{img.name}</li>)}
      <form method="POST" encType="multipart/form-data" action="http://localhost:8000/uploaddufichiers">
      <input type="file" onChange={(e)=>handleChange(e)}  name="mesfichiers" multiple />
      <button formTarget="_blank" type="submit"> envoyer </button>
      </form>
    </div>
  );
};  */

