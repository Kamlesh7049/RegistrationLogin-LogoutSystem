import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Dashboard=()=>{
    const [username,setUsername]=useState("");
    const [useremail,setUseremail]=useState("");
    const navigate=useNavigate()

    useEffect(()=>{
        const userName=localStorage.getItem("name");
        const userEmail=localStorage.getItem("email");

        if(!userName)
        {
            navigate("/login");
        }
        setUsername(userName);
        setUseremail(userEmail)
    },[])

    const logout=()=>{
        localStorage.clear();

        message.success("Logout Successfully!!")
        navigate("/login");
    }
    return(
        <>
        <h4>User DashBoard</h4>
        <h5>Welcome: {username} Email:{useremail}</h5>
        <br />
        <button onClick={logout}>LogOut</button>
        </>
    )
}
export default Dashboard;