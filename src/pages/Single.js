import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductItem from '../components/ProductItem'

function Single() {
  return (
    <>
    <Breadcrumbs title = 'Single Page' />

    <div className="products">
		<div className="container">
			<div className="agileinfo_single">
				
				<div className="col-md-4 agileinfo_single_left">
					<img id="example" src="images/si1.jpg" alt=" " className="img-responsive" />
				</div>
				<div className="col-md-8 agileinfo_single_right">
				<h2>KHARAMORRA Khakra - Hariyali</h2>
					<div className="rating1">
						<span className="starRating">
							<input id="rating5" type="radio" name="rating" value="5" />
							<label for="rating5">5</label>
							<input id="rating4" type="radio" name="rating" value="4" />
							<label for="rating4">4</label>
							<input id="rating3" type="radio" name="rating" value="3" checked="" />
							<label for="rating3">3</label>
							<input id="rating2" type="radio" name="rating" value="2" />
							<label for="rating2">2</label>
							<input id="rating1" type="radio" name="rating" value="1" />
							<label for="rating1">1</label>
						</span>
					</div>
					<div className="w3agile_description">
						<h4>Description :</h4>
						<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
							officia deserunt mollit anim id est laborum.Duis aute irure dolor in 
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
							pariatur.</p>
					</div>
					<div className="snipcart-item block">
						<div className="snipcart-thumb agileinfo_single_right_snipcart">
							<h4 className="m-sing">$21.00 <span>$25.00</span></h4>
						</div>
						<div className="snipcart-details agileinfo_single_right_details">
							<form action="#" method="post">
								<fieldset>
									<input type="hidden" name="cmd" value="_cart" />
									<input type="hidden" name="add" value="1" />
									<input type="hidden" name="business" value=" " />
									<input type="hidden" name="item_name" value="pulao basmati rice" />
									<input type="hidden" name="amount" value="21.00" />
									<input type="hidden" name="discount_amount" value="1.00" />
									<input type="hidden" name="currency_code" value="USD" />
									<input type="hidden" name="return" value=" " />
									<input type="hidden" name="cancel_return" value=" " />
									<input type="submit" name="submit" value="Add to cart" className="button" />
								</fieldset>
							</form>
						</div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>

    <div className="newproducts-w3agile">
		<div className="container">
			<h3>New offers</h3>
				<div className="agile_top_brands_grids">
					<ProductItem size="col-md-3" title="Fried-gram" op="55.00" np="35.99" hasOffer={true}  />
					<ProductItem size="col-md-3" title="Navaratan-dal" op="45.00" np="30.99" hasOffer={true}  />
					<ProductItem size="col-md-3" title="White-peasmatar" op="105.00" np="80.99" hasOffer={true}  />
					<ProductItem size="col-md-3" title="Channa-dal" op="55.00" np="35.99" hasOffer={true}  />
					<div className="clearfix"> </div>
				</div>
		</div>
	</div>
    </>
  )
}

export default Single