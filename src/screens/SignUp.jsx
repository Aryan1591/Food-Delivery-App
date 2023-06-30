import React, { useState } from 'react'
import { Typography } from '@mui/material';
import {Link} from 'react-router-dom'
import '../styles/signup.css'
export default function SignUp() {

   const[credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

const handleSubmit=async(e)=>{
   
     e.preventDefault();
     const response = await fetch("http://localhost:5000/api/createuser",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
         body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
     });

     const json= await response.json()
     console.log(json);

     if(!json.success)
     {
        alert("Enter Valid Credentials")
     }
}

const onChange = (event) =>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}

  return (
    <>

    <div className='container  d-flex center-div justify-content-center align-items-center flex-column'>
    <div  className='text-white fs-1 mt-5'>
      <Typography variant='h3' styles={{"color":"black"}}>SignUp</Typography>
      </div>
     <form onSubmit={handleSubmit} >
     <div className="form-group">
     <div className="mb-3 mt-4">
   
    <input type="text" placeholder="Name" className="form-control custom-input" name='name' value={credentials.name} onChange={onChange} size={30} autoComplete='off'/>
   
  </div>
  <div className="mb-3">
   
    <input type="email"  placeholder="Email Id" className="form-control custom-input"  name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={onChange} size={30} autoComplete='off'/>
   
  </div>
  <div className="mb-3">
   
    <input type="password"  placeholder="Password" className="form-control custom-input"  name='password' value={credentials.password} id="exampleInputPassword1"  onChange={onChange} size={30} autoComplete='off'/>
  </div>
  <div className="mb-4">
 
    <input type="text" placeholder="Location" className="form-control custom-input"  name='geolocation' value={credentials.geolocation} id="exampleInputPassword1"  onChange={onChange} size={30} autoComplete='off'/>
  </div>
  

  <div className="button-container row mb-4">
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger alreadyuser'>Already a user</Link>
  </div>
  
  </div>
</form>
</div>
    </>
  )
}
