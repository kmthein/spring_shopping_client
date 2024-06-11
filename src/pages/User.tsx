import React, { useState } from 'react'
import UserForm from '../components/UserForm'
import UserList from '../components/UserList'

const User = () => {
    const [users, setUsers] = useState([]);

  return (
    <div>
        <UserForm users={users} setUsers={setUsers} />
        <UserList users={users} setUsers={setUsers} />
    </div>
  )
}

export default User