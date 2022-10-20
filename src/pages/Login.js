import React from 'react'
import {Link} from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Login() {
  return (
    <>
    <Header/>
	<Breadcrumbs title='Login'/>

    {/* <!-- login --> */}
	<div className="login">
		<div className="container">
			<h2>Login Form</h2>
		
			<div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
				<form>
					<input type="email" placeholder="Email Address" required=" " />
					<input type="password" placeholder="Password" required=" " />
					<div className="forgot">
						<Link to="#">Forgot Password?</Link >
					</div>
					<input type="submit" value="Login" />
				</form>
			</div>
			<h4>For New People</h4>
			<p><Link to="registered.html">Register Here</Link > (Or) go back to <Link to="/">Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link ></p>
		</div>
	</div>
    {/* <!-- //login --> */}

    <Footer/>
    </>
  )
}

export default Login
