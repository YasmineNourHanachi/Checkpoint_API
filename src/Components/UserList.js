import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./UserCard.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="usersList">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        users.map((user) => <UserCard user={user} />)
      )}
    </div>
  );
};
export default UserList;
