import React from 'react'; 
import {add,sub,mult,divd} from "./Heading";
function Calc(){
    return ( 
        <>
        <ol>
    <li> The addition of two numbers is {add(2,3)}</li>
    <li> The subtraction of two numbers is {sub(2,3)}</li>
    <li> The multipication of two numbers is {mult(2,3)}</li>
    <li> The division of two numbers is {divd(2,3)}</li>
    
  </ol> 
  </>
    );
} 
export default Calc;