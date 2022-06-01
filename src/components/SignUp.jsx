import React from "react";


class SignUp extends React.Component{


    render(){
        return(
       
            <form action="onSubmit">  
  
   <input type='text' placeholder='divi'></input>
 
  
   <input type='password' placeholder='1234'></input>
  
    <button type="submit"> Sign Up</button>
    </form>
        
        )
    }

   
}
export default SignUp;