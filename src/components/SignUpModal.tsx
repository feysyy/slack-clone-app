import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function SignUpModal() {
	const [ userEmail, setUserEmail ] = useState<number | string>()
	const [ userPassword, setUserPassword ] = useState<number | string>()
	const [ confirmPassword, setConfirmPassword ] = useState<number | string>()

	function handleSubmit(e: any) {
		e.preventDefault()
		if(confirmPassword != userPassword) {
			alert('password does not match')
			return
		}
		userSignUp()
		e.target.reset()
		resetState()
	}

	function resetState() {
		setUserEmail('')
		setUserPassword('')
		setConfirmPassword('')
	}

	const userSignUp = async () => {
		const response = await fetch('http://206.189.91.54/api/v1/auth', {
			body: JSON.stringify({
				email: userEmail,
				password: userPassword,
				password_confirmation: confirmPassword
			}),
			method: 'POST',
			headers: { 'Content-Type': 'application/json' }
		})
		response.json().then(data => console.log(data))
	}

  return (
		<section>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label htmlFor="">Email: </label>
				<br></br>
				<input 
					onChange={(e) => {
						setUserEmail(e.target.value)
						// console.log(userEmail)
					}}
					type='email'
					required
				/>
				<br></br>
				<label htmlFor="">Password: </label>
				<br></br>

				<input 
					onChange={(e) => setUserPassword(e.target.value)}
					type='password'
					required
				/>
				<br></br>
				<label htmlFor="">Confirm Password: </label>
				<br></br>
				<input
					onChange={(e) => setConfirmPassword(e.target.value)} 
					type='password'
					required
				/>
				<br></br>
				<input type='submit' />
			</form>
			<div>
				<Link to="/">Click here to Sign-in</Link>
			</div>
		</section>
  )
}
