import React , {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { Typography } from '@mui/material';
import '../styles/logIn.css'
export default function Login() {
  const[credentials,setcredentials] = useState({email:"",password:""})
let navigate = useNavigate()
  const handleSubmit=async(e)=>{
     
       e.preventDefault();
       const response = await fetch("http://localhost:5000/api/loginuser",{
          method:"POST",
          headers:{
              'Content-Type':'application/json'
          },
           body:JSON.stringify({email:credentials.email,password:credentials.password})
       });
  
       const json= await response.json()
       console.log(json);
  
       if(!json.success)
       {
          alert("Enter Valid Credentials")
       }
       if(json.success)
       {
        localStorage.setItem("userEmail",credentials.email)
       
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken")) 
        navigate("/")
       }

  }
  
  const onChange = (event) =>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <div>
      <div className='container d-flex center-div justify-content-center align-items-center flex-column'>
     
      <div  className='text-white fs-1 mt-5'>
           <Typography variant='h3'>LogIn</Typography>
         </div>
     
     <form onSubmit={handleSubmit} className='form-1' >
    
  <div className="form-group mt-5">
  <div className='mb-4'>
    <input type="email" placeholder='Email Id' className="form-control custom-input" autoComplete='off'  name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp"  size={30}  onChange={onChange}/>
    </div>
  
  <div className="mb-3">
   
    <input type="password" className="form-control custom-input" placeholder='Password' name='password' value={credentials.password} id="exampleInputPassword1"  size={30} autoComplete='off' onChange={onChange}/>
  </div>
  </div>
  
  
  <div className="button-container row mb-4">
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/createUser" className='m-3 btn btn-danger'>Create a New Account</Link>
  </div>
</form>
</div>
    </div>
  )
}
