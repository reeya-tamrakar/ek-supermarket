import React from 'react'
import OfferImage from '../assets/images/offer.png'
import  '../App.css'

function ProductItem(props) {
  let renderOffer = () => {
    if (props.hasOffer) {
        return (
            <div className="agile_top_brand_left_grid_pos">
                <img src={OfferImage} alt=" " className="img-responsive" />
            </div>      
        )
    }
  }
  return (
    <div className={props.size + " top_brand_left"}>
        {/* size */}
        <div className="hover14 column">
            <div className="agile_top_brand_left_grid">
                {renderOffer()}
                <div className="agile_top_brand_left_grid1">
                    <figure>
                        <div className="snipcart-item block" >
                            <div className="snipcart-thumb">
                                <a href="products.html"><img src={props.url}/></a>		
                                <p>{props.title}</p>
                                {/* Title */}
                                <div className="stars">
                                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                                    <i className="fa fa-star gray-star" aria-hidden="true"></i>
                                </div>
                                <h4>${props.np} <span>${props.op}</span></h4>
                                {/* op -> old price and np -> new price */}
                            </div>
                            <div className="snipcart-details top_brand_home_details">
                                <form action="#" method="post">
                                    <fieldset>
                                        <input type="hidden" name="cmd" value="_cart" />
                                        <input type="hidden" name="add" value="1" />
                                        <input type="hidden" name="business" value=" " />
                                        <input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
                                        <input type="hidden" name="amount" value="20.99" />
                                        <input type="hidden" name="discount_amount" value="1.00" />
                                        <input type="hidden" name="currency_code" value="USD" />
                                        <input type="hidden" name="return" value=" " />
                                        <input type="hidden" name="cancel_return" value=" " />
                                        <input type="submit" name="submit" value="Add to cart" className="button" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem