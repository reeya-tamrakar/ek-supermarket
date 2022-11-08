import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setCategories, setProducts } from '../features/collections/collectionsReducer'
import { setFullName, setTokens } from '../features/auth/authReducer'


export default function Header() {
  const profileURL = 'https://uat.ordering-farmshop.ekbana.net/api/v4/profile'
  const logoutURL = 'https://uat.ordering-farmshop.ekbana.net/api/v4/auth/logout'
  const categoryURL = 'https://uat.ordering-farmshop.ekbana.net/api/v4/category'
  const productURL = 'https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1'

  const access_token = useSelector(state => state.auth.access_token)
  const fullName = useSelector(state => state.auth.fullName)
  const categories = useSelector(state => state.collections.categories)
  const dispatch = useDispatch()
  
  const getFullName = () => { 
    if (access_token) {
      fetch(profileURL, {
        method: "GET",
        headers: {
          "Api-Key": '3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx',
          "Authorization": "Bearer " + localStorage.getItem('access_token')
        }
      })
      .then((response) => response.json())
      .then((data) => {
		dispatch(setFullName({
			fullName: data.data.firstName + ' ' + data.data.lastName
		}))
      })
      .catch(error => {
        console.log("There was an error fetching the profile: " + error.message)
      });
    }
  }
  getFullName()
  const showFullName = () => {
    if (fullName) {
      return (
        <>
          <li style={{color: 'white'}}>Hi {localStorage.getItem('fullName')}!</li>
          <li><button className='btn btn-danger' onClick={logOut}>Logout</button></li>
        </>
      )
    }
    return (
      <>
        <li><Link to="/register">Create Account </Link ></li>
        <li><Link to="/login">Login</Link></li>
      </>
    )
  }
  const logOut = () => {
    fetch(logoutURL, {
      method: "GET",
      headers: {
        "Api-Key": '3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx',
        "Authorization": "Bearer " + localStorage.getItem('access_token')
      }
    })
    .then((response) => {
      if(response.status == 204) {
		dispatch(setTokens({
			access_token: '',
			refresh_token: ''
		}))
		dispatch(setFullName({
			fullName: ''
		}))
        alert('Successfully logged out!')
		
      }
    })
    .catch(error => {
      console.log("There was an error logging out: " + error.message)
    });
  }
  useEffect(() => {
	fetch(categoryURL, {
		method: "GET",
		headers: {
			"Api-Key": '3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx',
			"Warehouse-Id": 1
		}
	})
	.then((response) => response.json())
	.then((data) => {
		dispatch(
			setCategories({
				categories: data.data
			})
		)
	})
  }, [])
  useEffect(() => {
	fetch(productURL, {
		method: "GET",
		headers: {
			"Api-Key": '3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx',
			"Warehouse-Id": 1
		}
	})
	.then((response) => response.json())
	.then((data) => {
		dispatch(
			setProducts({
				products: data.data
			})
		)
	})
}
,[])
  const printSubCategories = (categoryTitle, subcategories, categoryId) => {
	if (subcategories.length > 0) {
		return (
			<ul className="dropdown-menu multi-column columns-3" key={categoryId}>
				<div className="row">
					<div className="multi-gd-img">
						<ul className="multi-column-dropdown">
							<h6>All {categoryTitle}</h6>
							{
								subcategories.map((subcategory) => {
									return (
										<li key={subcategory.id}><Link to={"/gourmet/"+ categoryTitle+ "/" + subcategory.title}>{subcategory.title}</Link ></li>
									)
								})
							}
						</ul>
					</div>	
				</div>
			</ul>
		)
	}
  }
  
//   // Mini Cart
//   paypal.minicart.render({
//     action: '#'
//   });

//   if (~window.location.search.indexOf('reset=true')) {
//     paypal.minicart.reset();
//   }

  return (
    <>
    {/* Header-Top-Bar */}
    <div className='agileits_header'>
        <div className="container">
			<div className="w3l_offers">
				<p>SALE UP TO 70% OFF. USE CODE "SALE70%" . <Link to="products.html">SHOP NOW</Link ></p>
			</div>
			<div className="agile-login">
				<ul>
          {showFullName()}
					<li><Link to="/contact">Help</Link ></li>
				</ul>
			</div>
			<div className="product_list_header">  
                <form className="last"> 
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <button className="w3view-cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                </form>  
			</div>
			<div className="clearfix"> </div>
		</div>
    </div>
    {/* // Header-Top-Bar */}

    {/* Header-Logo-Bar */}
    <div className="logo_products">
		<div className="container">
		    <div className="w3ls_logo_products_left1">
				<ul className="phone_email">
					<li><i className="fa fa-phone" aria-hidden="true"></i>Order online or call us : (+0123) 234 567</li>
				</ul>
			</div>
			<div className="w3ls_logo_products_left">
				<h1><Link to="/">super Market</Link ></h1>
			</div>
		    <div className="w3l_search">
			<form action="#" method="post">
				<input type="search" name="Search" placeholder="Search for Link Product..." required=""/>
				<button type="submit" className="btn btn-default search" aria-label="Left Align">
					<i className="fa fa-search" aria-hidden="true"> </i>
				</button>
				<div className="clearfix"></div>
			</form>
		</div>
		    <div className="clearfix"> </div>
		</div>
	</div>
     {/* // Header-Logo-Bar */}

    {/* Header-Navigation-Bar */}
    <div className="navigation-agileits">
		<div className="container">
			<nav className="navbar navbar-default">
							{/* <!-- Brand and toggle get grouped for better mobile display --> */}
							<div className="navbar-header nav_2">
								<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div> 
							<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
								<ul className="nav navbar-nav">
									<li className="active"><Link to="/" className="act">Home</Link></li>	
									{/* <!-- Mega Menu --> */}
									{
										categories.map((category, i) => {
											if (i >= 4){ return }
											return (
												<li className="dropdown" key={category.id}>
													<Link to={"/gourmet/" + category.title} className="dropdown-toggle" data-toggle="dropdown">
														{category.title}
														{category.subcategories.length > 0 ? (
															<b className="caret"></b>
														):("")}
													</Link>
													{
														printSubCategories(category.title, category.subcategories,
															category.id)
													}
												</li>
											)
										})
									}
									<li><Link to="/gourmet">Gourmet</Link ></li>
									<li><Link to="/offers">Offers</Link ></li>
									<li><Link to="/contact">Contact</Link ></li>
								</ul>
							</div>
							</nav>
			</div>
	</div>
    {/* // Header-Navigation-Bar */}
    </>
  )
}
