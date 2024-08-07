import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [userName,setUserName] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName,password})
    }
  return (
    <>
        <h1>Enter your details</h1>
        <input type="text"
        placeholder='username'
        onChange={(e)=>setUserName(e.target.value)}
        value={userName}
        />
        {" "}
        <input type="password" 
        placeholder='password'
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        />
        <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login