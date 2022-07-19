import React, { useState } from 'react';
import Form from './Components/Users/Form';
import UsersList from './Components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const handlerAddUser = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <Form onAddUser={handlerAddUser} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
