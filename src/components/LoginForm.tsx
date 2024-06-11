import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../api/productApi';

const LoginForm = () => {
    const initialInput = {
        username: "",
        password: ""
    }

    const [loginInput, setLoginInput] = useState(initialInput);

    const inputChangeHandler = (e) => {
        setLoginInput((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const {username, password} = loginInput;

    const navigate = useNavigate();

    const loginSubmitHandler = async (e) => {
        e.preventDefault();
        const res = await userLogin(loginInput);
        console.log(res);  
        if(res.status == 200) {
            alert("Login Successful");
            navigate("/");
        } else {
            alert("Try again, user information wrong");
        }
        
    }

  return (
    <div>
    <form onSubmit={loginSubmitHandler} action="" style={{background: "#fcfcfc", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", borderRadius: "10px", width: "30%", margin: "0 auto", padding: "50px"}}>
        <h1 className='title'>Login</h1>
        <div style={{marginBottom: "20px"}}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={inputChangeHandler}  className="text_input" style={{padding: "0 5px"}} required/>
        </div>
        <div style={{marginBottom: "20px"}}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={inputChangeHandler} className="text_input" style={{padding: "0 5px"}} required/>
        </div>
        <div style={{margin: "30px 0"}}>
            <button type='submit' style={{padding: "15px 0", width: "100%", backgroundColor: "#068179", color: "#FFF", border: 0, cursor: "pointer"}}>Login</button>
        </div>
        <div>
            <h4>Don't have an account? <Link to="/register"> Register</Link></h4>
        </div>
    </form>
</div>
  )
}

export default LoginForm