import React from 'react'
import ProductItem from './ProductItem'

function ProductItems() {
  return (
    <>
    <div class="col-md-8 products-right">
        <div class="products-right-grid">
            <div class="products-right-grids">
		        <div class="sorting">
			        <select id="country" onchange="change_country(this.value)" class="frm-field required sect">
				        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Default sorting</option>
				        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Sort by popularity</option> 
				        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Sort by average rating</option>					
				        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Sort by price</option>								
			        </select>
		        </div>
		        <div class="sorting-left">
			        <select id="country1" onchange="change_country(this.value)" class="frm-field required sect">
			        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Item on page 9</option>
			        <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Item on page 18</option> 
                    <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>Item on page 32</option>					
                    <option value="null"><i class="fa fa-arrow-right" aria-hidden="true"></i>All</option>								
			        </select>
		    </div>
		    <div class="clearfix"> </div>
            <div className="agile_top_brands_grids">
                <ProductItem size="col-md-4" title="Table Salt" op="25.00" np="15.55" hasOffer={true}  />
                <ProductItem size="col-md-4" title="Fortune-sunflower" op="35.00" np="20.99" hasOffer={true}  />
                <ProductItem size="col-md-4" title="Aashirvaad-Atta" op="35.00" np="20.99" hasOffer={true}  />
                <div className="clearfix"></div>
            </div>
            <div className="agile_top_brands_grids">
                <ProductItem size="col-md-4" title="Table Salt" op="25.00" np="15.55" hasOffer={true}  />
                <ProductItem size="col-md-4" title="Fortune-sunflower" op="35.00" np="20.99" hasOffer={true}  />
                <ProductItem size="col-md-4" title="Aashirvaad-Atta" op="35.00" np="20.99" hasOffer={true}  />
                <div className="clearfix"></div>
            </div>
            <div className="agile_top_brands_grids">
                <ProductItem size="col-md-4" title="Table Salt" op="25.00" np="15.55" hasOffer={true}  />
                <ProductItem size="col-md-4" title="Fortune-sunflower" op="35.00" np="20.99" hasOffer={true}  />
                <ProductItem size="col-md-4" title="Aashirvaad-Atta" op="35.00" np="20.99" hasOffer={true}  />
                <div className="clearfix"></div>
            </div>

            <nav class="numbering">
					<ul class="pagination paging">
						<li>
							<a href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li class="active"><a href="#">1<span class="sr-only">(current)</span></a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#">4</a></li>
						<li><a href="#">5</a></li>
						<li>
							<a href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
				</nav>
	    </div>
    </div>
    </div>
    </>
  )
}

export default ProductItems