import React, { useState } from 'react'

const UserForm = ({ users, setUsers }) => {
    const initialInput = {
        id: "",
        name: "",
        email: "",
        phone: ""
    };

    const [userInput, setUserInput] = useState(initialInput);

    const {name, email, phone} = userInput;    

    const userChangeHandler = (e) => {
        setUserInput((prev) => ({...prev, [e.target.name]: e.target.value }))
    }

    const userAddHandler = (e) => {
        e.preventDefault();
        if(userInput.name != "" && userInput.email != "" || userInput.phone != "") {
            setUsers([...users, {...userInput, id: (Math.ceil(Math.random() * 10000))} ]);    
            setUserInput(initialInput);
        } else {
            alert("Please fill information!");
        }
    }

  return (
    <div>
    <form action="">
        <h1 className='title'>Add User</h1>
        <div style={{marginBottom: "20px"}}>
            <label htmlFor="name">Name</label>
            <input type="text" style={{padding: "0 5px"}} onChange={userChangeHandler} value={name} id="name" name="name" className="text_input" required/>
        </div>
        <div style={{marginBottom: "20px"}}>
            <label htmlFor="email">Email</label>
            <input type="email" style={{padding: "0 5px"}} onChange={userChangeHandler} value={email} id="email" name="email" className="text_input" required/>
        </div>
        <div style={{marginBottom: "20px"}}>
            <label htmlFor="phone">Phone Number</label>
            <input type="number" style={{padding: "0 5px"}} onChange={userChangeHandler} value={phone} id="phone" name="phone" className="text_input" required/>
        </div>
        <div style={{margin: "30px 0"}}>
            <button onClick={userAddHandler} style={{padding: "10px 30px", display: "block", marginLeft: "auto", backgroundColor: "#1c54b5", color: "#FFF", border: 0, cursor: "pointer"}}>Submit</button>
        </div>
    </form>
</div>
  )
}

export default UserForm