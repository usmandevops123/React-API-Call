import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App =()=>{
  const [fullname,setFullname]=useState({
    fname:"",
    lname:"",
    email:"",
    phone:""
  });

  
  
  const inputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);
    // const value=event.target.value;
    // const name=event.target.name;
    const {value,name}=event.target;
   
  setFullname((preValue)=>{
    if(name==="fname"){
      return{
        fname:value,
        lname:preValue.lname,
        email:preValue.email,
        phone:preValue.phone,
      };
    }else if(name==="lname"){
      return{
        fname:preValue.fname,
        lname:value,
        email:preValue.email,
        phone:preValue.phone,
      };
    }else if(name==="email"){
      return{
        fname:preValue.fname,
        lname:preValue.lname,
        email:value,
        phone:preValue.phone,
      };
    }else if(name==="phone"){
      return{
        fname:preValue.fname,
        lname:preValue.lname,
        email:preValue.email,
        phone:value,
      };
    }
    });
  };
  const onSubmits=(event)=>{
    event.preventDefault();
    alert("form Submitted");
  };
   
  
  return(
<> 
 <div className="main_div">
<form onSubmit={onSubmits}>
<div>

  <h1 className="text-capitalize text-center mt-5 text-danger">Hello {fullname.fname } {fullname.lname} </h1>  
  <text>
<br />
{fullname.email } <br />
{fullname.phone } <br />
</text>
 
  <div className='box'>
  <input type='text' placeholder='Enter your First Name'
  name="fname"
   onChange={inputEvent}
   value={fullname.fname}></input>
  
  <input type='text' placeholder='Enter your Last Name'
  name="lname" 
  onChange={inputEvent}
  value={fullname.lname}></input>
  <input type='email' placeholder='Enter your Email'
  name="email" 
  onChange={inputEvent}
  value={fullname.email}></input>
  <input type='number' placeholder='Enter your Number'
  name="phone" 
  onChange={inputEvent}
  value={fullname.phone}></input>
  </div>
  <div className="btn">
  <button variant="success">Success</button>{' '}
  </div>
  
</div> 

</form>
</div>
</>
  );
   
}; 
export default App;
