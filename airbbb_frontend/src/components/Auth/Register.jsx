import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import authenticate from '../../utils/auth/authenticate';

const Register = props => {
  const [user, setUser] = useState({ email: '', password: '' });

  useEffect( () => {
    if (authenticate()) props.history.push("/") 
  }, [] )

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('/api/v1/registrations', { user: { ...user } }, { withCredentials: true })
    .then( resp => {
      props.history.push("/") 
    })
    .catch( err => console.log(err))
  }

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="email" name="email"/>
      <input onChange={handleChange} type="password" name="password"/>
      <button type="submit">Login</button>
    </form>
  )
}

export default Register;