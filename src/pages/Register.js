import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import {Link, Navigate} from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

function Register() {
  const signUpURL = 'https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup'

  if(localStorage.getItem('fullName')) { return <Navigate to="/" />; }
  
  const phoneRegExp = /[9][8]\d{8}$/
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      mobile_number: '',
      email: '',
      password: '',
      cpassword: '',
      checked: false
    }, 
    validationSchema: Yup.object({
      first_name: Yup.string()
                  .min(2, 'Must be two characters or more!')
                  .required('Field Required!'),
      last_name: Yup.string()
                 .min(2, 'Must be two characters or more!')
                 .required('Field Required!'),
      mobile_number: Yup.string()
                    .min(10)
                    .max(10)
                    .label('Mobile Number')
                    .matches(phoneRegExp, 'Phone number is not valid')
                    .required('A phone number is required'),
      email: Yup.string()
                .email('Invalid Email Address')
                .required('Field Required!'),
      password: Yup.string()
                    .required('Field Required!')
                    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , 'Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number & 1 special character!'),
      cpassword: Yup.string()
                    .required('Field Required!')
                    .oneOf([Yup.ref('password')], "Passwords don't match"),
      checked: Yup.boolean()
                  .oneOf([true], 'You need to accept the terms and conditions!')
    }),
    onSubmit: (values) => {
        const requestObject = new FormData()
        requestObject.append("first_name", values.first_name)
        requestObject.append("last_name", values.last_name)
        requestObject.append("mobile_number", values.mobile_number)
        requestObject.append("email", values.email)
        requestObject.append("password", values.password)
        
        fetch(signUpURL, {
          method: "POST",
          headers: {
            "Api-Key": process.env.EKBANA_API_KEY
          },
          body: requestObject
        })
        .then((response) => response.json())
        .then((data) => {
          let alertMessage = ''
          if (!data.hasOwnProperty('errors')) {
            formik.setFieldValue("checked", false)
            formik.resetForm()
            alertMessage = "Successfully registered! You can log in now."
          } else {
            for (let error of data.errors) { 
              alertMessage += error.message + "\n"
            }
          }
          alert(alertMessage)
        })
        .catch(error => {
          alert("There was an error registering: " + error.message)
        });
    }
  })

  const handleReset = (resetForm) =>{
    formik.setFieldValue("checked", false)
    resetForm()
  }


  return (
   <>
    <Breadcrumbs title = 'Register'/>

    {/* <!-- register --> */}
	<div className="register">
		<div className="container">
			<h2>Register Here</h2>
			<div className="login-form-grids">
				<h5>profile information</h5>
				<form onSubmit={formik.handleSubmit}>
					<input type="text" placeholder="First Name..." id="first_name" required=" " value={formik.values.first_name} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/>
          {(formik.touched.first_name && formik.errors.first_name) ? ( <div className='error'>{formik.errors.first_name}</div>) : null } <br/>

					<input type="text" placeholder="Last Name..." id="last_name" required=" " value={formik.values.last_name} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/>
          {(formik.touched.last_name && formik.errors.last_name) ? ( <div className='error'>{formik.errors.last_name}</div>) : null } <br/>

          <div className="register-check-box">
            <div className="check">
              <label className="checkbox"><input type="checkbox" name="checkbox" /><i> </i>Subscribe to Newsletter</label>
            </div>
          </div>
				  <h6>Login information</h6>
					<input type="text" placeholder="Phone Number" id="mobile_number" required=" " value={formik.values.mobile_number} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/>
          {(formik.touched.mobile_number && formik.errors.mobile_number) ? ( <div className='error'>{formik.errors.mobile_number}</div>) : null } <br/>
          <br/>
					<input type="email" placeholder="Email Address" id="email" required=" " value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/>
          {(formik.touched.email && formik.errors.email) ? ( <div className='error'>{formik.errors.email}</div>) : null } <br/>

					<input type="password" placeholder="Password" id="password" required=" " value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/>
          {(formik.touched.password && formik.errors.password) ? ( <div className='error'>{formik.errors.password}</div>) : null } <br/>

					<input type="password" placeholder="Password Confirmation" id="cpassword" required=" " value={formik.values.cpassword} onChange={formik.handleChange} onBlur={formik.handleBlur} /><br/>
          {(formik.touched.cpassword && formik.errors.cpassword) ? ( <div className='error'>{formik.errors.cpassword}</div>) : null } <br/>

					<div className="register-check-box">
						<div className="check">
							<label className="checkbox"><input type="checkbox" name="checkbox" id='checked' value={formik.values.checked} onChange={() => formik.setFieldValue("checked", !formik.values.checked)} onBlur={formik.handleBlur} /><i> </i>I accept the terms and conditions</label><br/>
              {(formik.touched.checked && formik.errors.checked) ? (<div className='error'>{formik.errors.checked}</div>) : null} <br/>

						</div>
					</div>
					<input type="submit" value="Register"/>
          <input onClick={handleReset.bind(null, formik.handleReset)} type="reset"/>
				</form>
			</div>
			<div className="register-home">
				<Link to="/">Home</Link >
			</div>
		</div>
	</div>
    {/* <!-- //register --> */}
   </>
  )
}

export default Register