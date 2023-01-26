import axios from "axios";
import React, {  useEffect, useState } from "react";
import User from "../../components/user/User";
import "./Users.css";

function Users() {
  const [user, setUser] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/users";
  useEffect(()=>{
    axios.get(API).then((res) => setUser(res.data));
  },[])
    console.log()
  return (
    <div>
      {user.map((item) => (
        <User key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Users;
