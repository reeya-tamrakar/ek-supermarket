import React, { Component } from 'react'
import Header from '../components/Header'
import Eleven from '../assets/images/11.jpg'
import Twentytwo from '../assets/images/22.jpg'
import Fortyfour from '../assets/images/44.jpg'
import CarouselImg1 from '../assets/images/b1.jpg'
import CarouselImg2 from '../assets/images/b3.jpg'
import BannerImg1 from '../assets/images/p2.jpg'
import BannerImg2 from '../assets/images/p3.jpg'
import BannerImg3 from '../assets/images/p4.jpg'
import BannerImg4 from '../assets/images/111.jpg'
import Footer from '../components/Footer'
import ProductItem from '../components/ProductItem'

class Home extends Component {
    componentDidMount() {
        // <!-- main slider-banner -->
        jQuery('#demo1').skdslider({'delay':5000, 'animationSpeed': 2000,'showNextPrev':true,'showPlayButton':true,'autoSlide':true,'animationType':'fading'});
                    
        jQuery('#responsive').change(function(){
            $('#responsive_wrapper').width(jQuery(this).val());
        });
        // <!-- main slider-banner -->
    }
  render () {    
  return (
    <>
    <Header />

    {/* <!-- main-slider --> */}
		<ul id="demo1">
			<li>
				<img src={Eleven} alt="" />
				{/* <!--Slider Description example--> */}
				<div className="slide-desc">
					<h3>Buy Rice Products Are Now On Line With Us</h3>
				</div>
			</li>
			<li>
				<img src={Twentytwo} alt="" />
				  <div className="slide-desc">
					<h3>Whole Spices Products Are Now On Line With Us</h3>
				</div>
			</li>
			
			<li>
				<img src={Fortyfour} alt="" />
				<div className="slide-desc">
					<h3>Whole Spices Products Are Now On Line With Us</h3>
				</div>
			</li>
		</ul>
	{/* <!-- //main-slider --> */}

	{/* <!-- top-brands --> */}
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
	{/* <!-- //top-brands --> */}

    {/* <!-- Carousel --> */}
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      {/* <!-- Indicators --> */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
         <a href="beverages.html"> <img className="first-slide" src={CarouselImg1} alt="First slide" /></a>
       
        </div>
        <div className="item">
         <a href="personalcare.html"> <img className="second-slide " src={CarouselImg2} alt="Second slide" /></a>
         
        </div>
        <div className="item">
          <a href="household.html"><img className="third-slide " src={CarouselImg1} alt="Third slide" /></a>
          
        </div>
      </div>
    
    </div>
	{/* <!-- /.carousel -->	 */}

    {/* <!--banner-bottom--> */}
	<div className="ban-bottom-w3l">
					<div className="container">
					<div className="col-md-6 ban-bottom3">
							<div className="ban-top">
								<img src={BannerImg1} className="img-responsive" alt=""/>
								
							</div>
							<div className="ban-img">
								<div className=" ban-bottom1">
									<div className="ban-top">
										<img src={BannerImg2} className="img-responsive" alt=""/>
										
									</div>
								</div>
								<div className="ban-bottom2">
									<div className="ban-top">
										<img src={BannerImg3} className="img-responsive" alt=""/>
										
									</div>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
						<div className="col-md-6 ban-bottom">
							<div className="ban-top">
								<img src={BannerImg4} className="img-responsive" alt=""/>
							</div>
						</div>
						
						<div className="clearfix"></div>
					</div>
	</div>
    {/* <!--banner-bottom--> */}

    {/* <!--brands--> */}
	<div className="brands">
		<div className="container">
		<h3>Brand Store</h3>
			<div className="brands-agile">
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
			<div className="brands-agile-1">
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
			<div className="brands-agile-2">
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="col-md-2 w3layouts-brand">
					<div className="brands-w3l">
						<p><a href="#">Lorem</a></p>
					</div>
				</div>
				<div className="clearfix"></div>
			</div>
		</div>
	</div>	
    {/* <!--//brands--> */}

	{/* < new > */}
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
	{/* <// new > */}

    <Footer />
    </>
    )
  }
}
export default Home;