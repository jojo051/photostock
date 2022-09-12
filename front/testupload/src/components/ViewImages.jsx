import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const ViewImages = () => {
  const[data, setData] = useState(["rgtrg"])
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
        <h1>Visioner vos images</h1>
        <div><Link to="/">retour</Link></div>
        {JSON.stringify(data)=== JSON.stringify([]) ?<p>Vous n'avez pas d'image a afficher</p> :
        data.map((image,i)=> <img key={i} src={`https:localhost:8000/images/${image.name}`} alt={image.name} /> )}
        </div>
  );
};

export default ViewImages;