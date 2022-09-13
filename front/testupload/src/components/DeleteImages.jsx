import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const DeleteImages = () => {
  const[data, setData] = useState([]);
  const[dataErrase, setDataErrase] = useState([]);
  
  const PATH_URL = "https://localhost:8000/viewimages";

  useEffect(()=>{
    Axios.get(PATH_URL)
    .then((res)=>{
      setData(res.data)
      setDataErrase(res.data.map(element => {
        const addData = {"check":false}
        return {...element ,...addData}
      }))
    })
    .catch((err)=>console.log("err",err));
  },[])

  const handleClick =(e)=>{
    const idcheck = e.target.nextSibling.id
    const dataCheck = {
      "check": e.target.checked
      }
      const idData = dataErrase.findIndex(el => el.id == idcheck)
    if (dataErrase[idData].check == false) {
      setDataErrase(dataErrase.map(el => {
        if (el.id == idcheck) {
          return {...el, ...dataCheck}
        } else {
          return el
        }
      }))
    } else {
        setDataErrase(dataErrase.map(el=>{
          return { ...el, ...dataCheck} 
          })
        )
    }
  }

  const submitForm =(e)=>{
    e.preventDefault();
    if(dataErrase.length == 0 || (JSON.stringify(dataErrase.filter(el=>el.check === false)) == JSON.stringify(dataErrase)) ){
      alert("Vous n'avez rien selectionner")
    } else {
      const submitDataErase = dataErrase.filter(el => el.check == true).map(el => el.id).join()
      //console.log('jojo',submitDataErase);
      Axios.delete(`https://localhost:8000/viewimages/${submitDataErase}`)
      .then((res)=> {
        alert(res.data);
        window.history.go()
      })
      .catch((err)=> {
        console.log("errEnvoi",err);
        alert("echec envoie");
      })
    }
  }

  return (
    <div className='delete' >
      <h1>Suprimer vos image</h1>
      <div className='btn-link'><Link className='link' to="/">Retour</Link></div>
      <form className='delete-form' onSubmit={submitForm}>
        {JSON.stringify(data)=== JSON.stringify([]) ?<p>Vous n'avez pas d'image à suprimer</p> :
        data.map((image,i)=>
          <div className='delete-images' key={i} >
            <input className='delete-input' type="checkbox" onClick={(e)=>handleClick(e)} ></input>
            <img id={image.id} style={{height:"80px"}} src={`https:localhost:8000/images/${image.name}`} alt={image.name} />
          </div>
        )}
      <button className='btn-suppr' type="submit">suprimer</button>
      </form>
    </div>
  );
};

export default DeleteImages;