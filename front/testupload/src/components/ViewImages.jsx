import React,{useState, useEffect} from 'react';
import Axios from 'axios';

const ViewImages = () => {
  const[data, setData] = useState([])
  const PATH_URL = "https://localhost:8000/viewimages";
  
  useEffect(()=>{
    Axios.get(PATH_URL)
    .then((res)=>{
      console.log("res",res.data)
      setData(res.data);
    })
    .catch((err)=>console.log("err",err));
  },[])

  return (
    <div>
        <h1>hello vision</h1>
        {data.map((image,i)=> <img key={i} src={`https:localhost:8000/images/${image.name}`} alt={image.name} /> )}
        </div>
  );
};

export default ViewImages;