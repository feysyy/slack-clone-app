import React, { useState } from 'react'
import SignUpModal from '../components/SignUpModal'
import { Link } from "react-router-dom";

export default function LoginScreen() {
  const [ password, setPassword ] = useState<number | string>()
  const [ username, setUsername ] = useState<number | string>()

  function handleSubmit(e: any) {
    e.preventDefault()

  }

  const userLogin =async () => {
    
  }

  return (
    <section>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="">E-mail: </label>
          <br></br>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="email" 
            required
          />
          <br></br>
          <label htmlFor="">Password:</label>
          <br></br>
          <input 
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            required
          />
          <br></br>
          <input type="submit" />
        </form>
      </div>
      <div>
        <p>Doesn't have an account yet?</p>
        <Link to="/sign-up-page">Sign up here</Link>
      </div>
    </section>
  )
}
