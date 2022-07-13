import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function LoginScreen() {
  const [ loginPassword, setLoginPassword ] = useState<number | string>()
  const [ loginEmail, setLoginEmail ] = useState<number | string>()

  function handleSubmit(e: any) {
    e.preventDefault()
    userLogin()
    // if(userLogin().errors)
    e.target.reset()
    resetState()
  }

  function resetState() {
    setLoginPassword('')
    setLoginEmail('')
  }
  
  const userLogin = async () => {
      const response = await fetch('http://206.189.91.54/api/v1/auth/sign_in', {
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword
        }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
		response.json().then(data => console.log(data))
  }

  return (
    <section>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="">E-mail: </label>
          <br></br>
          <input
            onChange={(e) => setLoginEmail(e.target.value)}
            type="email" 
            required
          />
          <br></br>
          <label htmlFor="">Password:</label>
          <br></br>
          <input 
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password" 
            required
          />
          <br></br>
          <input type="submit" />
        </form>
      </div>
      <div>
        <p>Don't have an account yet?</p>
        <Link to="/sign-up-page">Sign up here</Link>
      </div>
    </section>
  )
}
