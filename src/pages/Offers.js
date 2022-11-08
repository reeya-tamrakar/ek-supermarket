import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import ProductItem from '../components/ProductItem'

function Offers() {
  return (
    <>
    <Breadcrumbs title = 'Offers' />

    <div className="top-brands">
		<div className="container">
		<h2>Top selling offers</h2>
			<div className="grid_3 grid_5">
				<div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
					<ul id="myTab" className="nav nav-tabs" role="tablist">
						<li role="presentation" className="active"><a href="#expeditions" id="expeditions-tab" role="tab" data-toggle="tab" aria-controls="expeditions" aria-expanded="true">Advertised offers</a></li>
						<li role="presentation"><a href="#tours" role="tab" id="tours-tab" data-toggle="tab" aria-controls="tours">Today Offers</a></li>
					</ul>
					<div id="myTabContent" className="tab-content">
						<div role="tabpanel" className="tab-pane fade in active" id="expeditions" aria-labelledby="expeditions-tab">
							<div className="agile-tp">
								<h5>Advertised this week</h5>
								<p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
							</div>
							<div className="agile_top_brands_grids">
								<ProductItem size="col-md-4" title="Table Salt" op="25.00" np="15.55" hasOffer={true}  />
								<ProductItem size="col-md-4" title="Fortune-sunflower" op="35.00" np="20.99" hasOffer={true}  />
								<ProductItem size="col-md-4" title="Aashirvaad-Atta" op="35.00" np="20.99" hasOffer={true}  />
								<div className="clearfix"> </div>
							</div>
							<div className="agile_top_brands_grids">
								<ProductItem size="col-md-4" title="Sampann-toor-dal" op="55.00 " np="35.99" hasOffer={true}  />
								<ProductItem size="col-md-4" title="Parryss-sugar" op="45.00" np="30.99" hasOffer={true}  />
								<ProductItem size="col-md-4" title="Saffola-gold" op="105.00" np="80.99" hasOffer={true}  />
								<div className="clearfix"> </div>
							</div>
						</div>
						<div role="tabpanel" className="tab-pane fade" id="tours" aria-labelledby="tours-tab">
							<div className="agile-tp">
								<h5>This week</h5>
								<p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
							</div>
							<div className="agile_top_brands_grids">
								<ProductItem size="col-md-4" title="Sona-masoori-rice" op="55.00 " np="35.99" hasOffer={true}  />
								<ProductItem size="col-md-4" title="Milky-mist-paneer" op="45.00" np="30.99" hasOffer={true}  />
								<ProductItem size="col-md-4" title="Basmati-Rice" op="105.00" np="80.99" hasOffer={true}  />
								<div className="clearfix"> </div>
							</div>
							<div className="agile_top_brands_grids">
								<ProductItem size="col-md-4" title="Fortune-sunflower" op="35.00 " np="20.99" hasOffer={true}  />
								<ProductItem size="col-md-4" title="Nestle-a-slim" op="35.00" np="20.99" hasOffer={true}  />
								<ProductItem size="col-md-4" title="Bread-sandwich" op="65.00" np="40.99" hasOffer={true}  />
								<div className="clearfix"> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Offers