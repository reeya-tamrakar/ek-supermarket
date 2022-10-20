import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  // Mini Cart
  paypal.minicart.render({
    action: '#'
  });

  if (~window.location.search.indexOf('reset=true')) {
    paypal.minicart.reset();
  }

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
					<li><Link to="/register"> Create Account </Link ></li>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/contact">Help</Link ></li>
				</ul>
			</div>
			<div className="product_list_header">  
                <form action="#" method="post" className="last"> 
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
				<h1><Link to="index.html">super Market</Link ></h1>
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
									<li className="dropdown">
										<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Groceries<b className="caret"></b></Link >
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Groceries</h6>
														<li><Link to="groceries.html">Dals &amp; Pulses</Link ></li>
														<li><Link to="groceries.html">Almonds</Link ></li>
														<li><Link to="groceries.html">Cashews</Link ></li>
														<li><Link to="groceries.html">Dry Fruit</Link ></li>
														<li><Link to="groceries.html"> Mukhwas </Link ></li>
														<li><Link to="groceries.html">Rice &amp; Rice Products</Link ></li>
													</ul>
												</div>	
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Household<b className="caret"></b></Link >
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Household</h6>
														<li><Link to="household.html">Cookware</Link ></li>
														<li><Link to="household.html">Dust Pans</Link ></li>
														<li><Link to="household.html">Scrubbers</Link ></li>
														<li><Link to="household.html">Dust Cloth</Link ></li>
														<li><Link to="household.html"> Mops </Link ></li>
														<li><Link to="household.html">Kitchenware</Link ></li>
													</ul>
												</div>
												
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Personal Care<b className="caret"></b></Link >
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>Baby Care</h6>
														<li><Link to="personalcare.html">Baby Soap</Link ></li>
														<li><Link to="personalcare.html">Baby Care Accessories</Link ></li>
														<li><Link to="personalcare.html">Baby Oil &amp; Shampoos</Link ></li>
														<li><Link to="personalcare.html">Baby Creams &amp; Lotion</Link ></li>
														<li><Link to="personalcare.html"> Baby Powder</Link ></li>
														<li><Link to="personalcare.html">Diapers &amp; Wipes</Link ></li>
													</ul>
												</div>
												
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Packaged Foods<b className="caret"></b></Link >
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>All Accessories</h6>
														<li><Link to="packagedfoods.html">Baby Food</Link ></li>
														<li><Link to="packagedfoods.html">Dessert Items</Link ></li>
														<li><Link to="packagedfoods.html">Biscuits</Link ></li>
														<li><Link to="packagedfoods.html">Breakfast Cereals</Link ></li>
														<li><Link to="packagedfoods.html"> Canned Food </Link ></li>
														<li><Link to="packagedfoods.html">Chocolates &amp; Sweets</Link ></li>
													</ul>
												</div>
												
											
											</div>
										</ul>
									</li>
									<li className="dropdown">
										<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Beverages<b className="caret"></b></Link >
										<ul className="dropdown-menu multi-column columns-3">
											<div className="row">
												<div className="multi-gd-img">
													<ul className="multi-column-dropdown">
														<h6>Tea &amp; Coeffe</h6>
														<li><Link to="beverages.html">Green Tea</Link ></li>
														<li><Link to="beverages.html">Ground Coffee</Link ></li>
														<li><Link to="beverages.html">Herbal Tea</Link ></li>
														<li><Link to="beverages.html">Instant Coffee</Link ></li>
														<li><Link to="beverages.html"> Tea </Link ></li>
														<li><Link to="beverages.html">Tea Bags</Link ></li>
													</ul>
												</div>
							
											</div>
										</ul>
									</li>
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
