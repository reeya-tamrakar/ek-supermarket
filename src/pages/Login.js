import React from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { useDispatch  } from 'react-redux'

import { setTokens } from '../features/auth/authReducer'

function Login() {
  const loginURL = 'https://uat.ordering-farmshop.ekbana.net/api/v4/auth/login'
  const forgotPasswordURL = 'https://uat.ordering-farmshop.ekbana.net/api/v4/auth/forgot-password'
  const navigate = useNavigate()
  const dispatch = useDispatch()

  if(localStorage.getItem('fullName')) { return <Navigate to="/" />; }
  
  const handleLogin = (e) => {
    e.preventDefault()
    console.log(e)
    // Prepare data
    const requestObject = new FormData()   
    requestObject.append("username", e.target[0].value)
    requestObject.append("password", e.target[1].value)
    requestObject.append("client_id", 2)
    requestObject.append("client_secret", '2TJrcyMbXT6gDQXVqeSlRbOKvtTfMsuxfuK6vpey')
    requestObject.append("grant_type", 'password')
    
    // Request API for login
    fetch(loginURL, {
      method: "POST",
      headers: {
        "Api-Key": '3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx'
      },
      body: requestObject
    })
    .then((response) => response.json())
    .then((data) => {
      // Viewing the response
      alert(JSON.stringify(data))

      // Checking for any errors from the server side
      let alertMessage = ''
      if (!data.hasOwnProperty('errors')) {
        // No errors
        e.target.reset()
        dispatch(setTokens({
          access_token : data.access_token,
          refresh_token : data.refresh_token
        }))
        alertMessage = "Successfully logged in!"
        navigate('/')
      } else {
        for (let error of data.errors) { 
          alertMessage += error.message + "\n"
        }
      }
      alert(alertMessage)
    })
    .catch(error => {
      alert("There was an error logging in: " + error.message)
    });

  }
  const handleForgotPassword = () => {
    const resetEmail = prompt("Enter email of which you want to reset password?")
    const requestObject = {
      email: resetEmail
    }
    
    fetch(forgotPasswordURL, {
      method: "POST",
      headers: {
        "Api-Key": '3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx'
      },
      body: JSON.stringify(requestObject)
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data.hasOwnProperty('errors')) {
        alert("Reset Email has been sent to " + data.data.email + ". Click on the reset link and reset the password.")
      } else {
        alert("The email doesn't exist.")
      }
    })
    .catch(error => {
      console.log("There was an error resetting: " + error.message)
    });
  }

  return (
    <>
	<Breadcrumbs title='Login'/>

    {/* <!-- login --> */}
	<div className="login">
		<div className="container">
			<h2>Login Form</h2>
		
			<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
				<form onSubmit={handleLogin}>
					<input type="email" placeholder="Email Address" required=" " />
					<input type="password" placeholder="Password" required=" " />
					<div className="forgot" onClick={handleForgotPassword}>
						<Link>Forgot Password?</Link >
					</div>
					<input type="submit" value="Login" />
				</form>
			</div>
			<h4>For New People</h4>
			<p><Link to="/register">Register Here</Link> (Or) go back to <Link to="/">Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link ></p>
		</div>
	</div>
    {/* <!-- //login --> */}
    </>
  )
}

export default Login
