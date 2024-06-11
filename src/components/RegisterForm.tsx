import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  return (
    <div>
        <form action="" style={{background: "#fcfcfc", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", borderRadius: "10px", width: "30%", margin: "0 auto", padding: "50px"}}>
            <h1 className='title'>Register</h1>
            <div style={{marginBottom: "20px"}}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="text_input" required/>
            </div>
            <div style={{marginBottom: "20px"}}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="text_input" required/>
            </div>
            <div style={{marginBottom: "20px"}}>
                <label htmlFor="phone">Phone Number</label>
                <input type="number" id="phone" name="phone" className="text_input" required/>
            </div>
            <div style={{marginBottom: "20px"}}>
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" className="text_input" required/>
            </div>
            <div style={{marginBottom: "20px"}}>
                <label htmlFor="gender">Gender</label>
                <div className="radio" style={{margin: "10px 0", marginBottom: "20px"}}>
                    <input type="radio" name="gender" value="male" style={{marginRight: "5px"}} />Male
                    <input type="radio" name="gender" value="female" style={{margin: "0 5px"}}/>Female
                    <input type="radio" name="gender" value="other" style={{margin: "0 5px"}}/>Other
                </div>
            </div>
            <div style={{marginBottom: "20px"}}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className="text_input" required/>
            </div>
            <div style={{marginBottom: "20px"}}>
                <label htmlFor="conpassword">Confirm Password</label>
                <input type="password" id="conpassword" name="conpassword" className="text_input" required/>
            </div>
            <div style={{margin: "30px 0"}}>
                <button style={{padding: "15px 0", width: "100%", backgroundColor: "#068179", color: "#FFF", border: 0, cursor: "pointer"}}>Register</button>
            </div>
            <h4>Already have an account? <Link to="/login"> Login</Link></h4>
        </form>
    </div>
  )
}

export default RegisterForm