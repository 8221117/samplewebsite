import React,{useState} from "react";
import Counter from './likeanddislikebutton/likebutton';






const Inputfield =({name,rating,summary,poster})=>{

  const [show,setShow]= useState(false);

  const paraStyles={

    display:show? "block":"none",
}

const styles = {
  color: rating > 8 ? "green" : "red"
};


  return (

    <div>
    <li style={{background:"yellow", margin:10}}>
      <p>{name}</p>
    <p style={styles}>⭐{rating}</p>
    <button onClick={()=>setShow(!show)}>toggle description</button>
    <p style={paraStyles} >{summary}</p>
    <br></br>
    <img src={poster} alt={name + "image"} ></img>
    <Counter/> 
     </li>
    </div>

  )

};

export default Inputfield; 