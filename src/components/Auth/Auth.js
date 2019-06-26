import React, {useState} from 'react';

import './Auth.css';

const Auth = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const title = () => {
    return login ? 'Login' : 'Signup';
  }

  const loginToggle = (event) => {
    event.preventDefault();
    setLogin(!login);
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  const signupFields = () => !login ? 
  (
    <div>
      <label htmlFor="firstName">First Name:</label><br/>
      <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
      <label htmlFor="lastName">Last Name:</label><br/>
      <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
    </div>
  ) 
  : null

  return(
    <form className="cardLike">
      <h1>{title()}</h1>
      <label htmlFor="email">Email:</label><br/>
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
      <label htmlFor="password">Password:</label><br/>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
      {signupFields()}
      <button onClick={loginToggle}>Login/Signup Toggle</button><br/>
      <button type="submit">Submit User Data</button>
    </form>
  )
}

export default Auth;