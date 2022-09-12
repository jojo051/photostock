import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div className='view-image'>
        <h1>Visioner vos images</h1>
        <div className='btn-link'><Link className='link' to="/">Retour</Link></div>
        <div className='images-sort' >
          {JSON.stringify(data)=== JSON.stringify([]) ?<p>Vous n'avez pas d'image a afficher</p> :
          data.map((image,i)=> <img className='images images-sort' key={i} src={`https:localhost:8000/images/${image.name}`} alt={image.name} />)}
        </div>
        </div>
  );
};

export default ViewImages;