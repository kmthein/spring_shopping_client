import React from 'react'

const UserList = ({ users, setUsers }) => {
    console.log(users);
    
    const userDeleteHandler = (id) => {
        const filterUser = users.filter((user) => user.id != id);
        setUsers(filterUser);
    }
  return (
    <>
    {
        users && users.length > 0 ? (
            <div className='l-wrap-inner'>
        <table>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
            {
                    users.map((user, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button onClick={() => userDeleteHandler(user.id)} style={{background: "red", color: "white", border: 0, padding: "5px", margin: "auto", display: "block", cursor: "pointer"}}>Delete</button>
                            </td>
                        </tr>
                    ))
            }

        </table>
    </div>
        ) : (
            <div>
                <h3 style={{textAlign: "center", margin: "20px 0"}}>User not found.</h3>
            </div>
        )
    }
    </>
)
}

export default UserList