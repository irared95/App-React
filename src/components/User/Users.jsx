import React from 'react';
import User from "./User";

const Users = (props) => props.users.map(u => <User key={u.id} user={u}/>)

export default Users;