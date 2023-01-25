import { useState } from 'react';
import UserForm from './components/userForm';
import UserShow from './components/userShow';
import './App.css';

function App() {
  const [getUser, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  return (
    <div className="container mt-5">
      <UserForm getUser={getUser} setUser={setUser}/>
      <UserShow getUser={getUser}/>
    </div>
  );
}

export default App;
