import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
const ComA =()=>{ 
    const[num,setNum]=useState(); 
    const[name,setName]=useState();
    const[moves,setMoves]=useState();
    
  useEffect(()=>{
      async function getData(){
          const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/1${num}`);
        console.log(res);
        setNum(res.data.num);
        setName(res.data.name);
        setMoves(res.data.moves.length);
        }
        getData(); 
        
  }); 


return(
  <> 
  <br/>
  <h1> you choose <span style={{color:'red'}} >{num} value</span></h1>
  <br/>
  <h2> My name is <span style={{color:'red'}}>{name} </span></h2><br/>
  <h3> I have <span style={{color:'red'}}> {moves} moves</span></h3> <br/>
  

  <select
  value={num}
  onChange={(event)=>{
      setNum(event.target.value);
  }} 
  
  >
      <option value="1">1</option>
      <option value="25">25</option>
      <option value="3">3</option>
      <option value="4">4</option>
  </select>
  </>  
);
};
export default ComA;