import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const handleDeleteUser = (_id) => {
    console.log("delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
        method: "DELETE",
        
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount>0) {
            alert('Deleted successfully')
        }
      });
  };
  return (
    <div>
      <h2>{users.length}</h2>
      <div>
        {users.map((user) => (
          <h4 key={user._id}>
            {user.name}: {user.email}{" "}
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Users;
