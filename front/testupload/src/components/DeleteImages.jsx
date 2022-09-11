import React, {useEffect, useState, useRef} from 'react';
import Axios from 'axios';


const DeleteImages = () => {
  const inputEl =useRef(null)
  const[data, setData] = useState([]);
  const[dataErrase, setDataErrase] = useState([]);
  
  const PATH_URL = "https://localhost:8000/viewimages";

  useEffect(()=>{
    Axios.get(PATH_URL)
    .then((res)=>{
      console.log("res",res.data)
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
    const submitDataErase = dataErrase.filter(el => el.check == true).map(el => el.id).join()
    console.log('jojo',submitDataErase);
    Axios.delete(`https://localhost:8000/viewimages/${submitDataErase}`)
    .then((res)=> {
      console.log("resEnvoi",res);
      alert(res.data);
      window.history.go()
    })
    .catch((err)=> {
      console.log("errEnvoi",err);
      alert("echec envoie");
    })
  }

  return (
    <div>
      <h1>delette image</h1>
      <form onSubmit={submitForm}>
      {data.map((image,i)=>
        <div key={i} >
          <input ref={inputEl} type="checkbox" onClick={(e)=>handleClick(e)} ></input>
          <img id={image.id} style={{height:"80px"}} src={`https:localhost:8000/images/${image.name}`} alt={image.name} />
        </div>
      )}
      <button type="submit">suprimer</button>
      </form>
    </div>
  );
};

export default DeleteImages;