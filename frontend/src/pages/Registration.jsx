import { useState } from "react";
import axios from "axios";
import {message} from "antd";

const Registration=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));

    }
    const handleSubmit=()=>{
        let api="   ";
        axios.post(api,input).then((res)=>{
            message.success("You are Successfully!!");
        })
    }
    
    return(
        <>
        <h4>User Registration</h4>
        Enter Name :<input type="text" name="name" value={input.name} onChange={handleInput}/>
        <br />
        Enter Email :<input type="email" name="email" value={input.email} onChange={handleInput}/>
        <br />
        Enter Password :<input type="password" name="password" value={input.password} onChange={handleInput}/>
        <br />
        <button onClick={handleSubmit}>Registered</button>
        </>
    )
}
export default Registration;