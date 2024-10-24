import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const Login=()=>{

     const [email,setEmail]=useState("");
     const[password,setPassword]=useState("");
     const navigate=useNavigate();

     const handleSubmit=async()=>{
        try{
            let api="http://localhost:8080/employees/employeelogin";
            const res=await axios.post(api,{email:email,password:password});
            console.log(res.data);
            localStorage.setItem("name",res.data[0].name);
            localStorage.setItem("email",res.data[0].email);
            navigate("/dashboard");
            message.success("Login Successfully!!")
        }
        catch(error){
            alert(error.response.data)

        }
     }

    return(
        <>
        <h4>User Login</h4>
        Enter Email :<input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <br />
        Enter Password :<input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>    
        <br />
        <button onClick={handleSubmit}>Login</button>

        </>
    )
}
export default Login;
