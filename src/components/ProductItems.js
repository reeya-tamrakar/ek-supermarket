import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setProducts } from '../features/collections/collectionsReducer'
import ProductItem from './ProductItem'


function ProductItems() {
    const productURL = 'https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1'
	
    let categories = useSelector(state => state.collections.categories)
    let products = useSelector(state => state.collections.products)
    let [filteredProducts, setFilteredProducts] = useState([])
	const [loading, setLoading] = useState(true)
	let [perPage, setPerPage] = useState(9)
	let [nPages, setnpages] = useState(1)
	let [currPage, setcurrPage] = useState(1)
    let {category_title, subcategory_title} = useParams()
	let dispatch = useDispatch()
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
			setLoading(true)
			dispatch(
				setProducts({
					products: data.data
				})
			)
			setLoading(false)
			setnpages(parseInt(data.data.length / perPage) + 1)
            setFilteredProducts(data.data.slice(0, perPage))
        })
      }, [])
	
	const loader = () => {
		if(loading){
			return (
			<>
				<br /><br />
				<h2 align='center'>Loading...</h2>
			</>
			)
		}
		return renderProducts()
	}
	const getProductGroups = () => {
		let products3group = []
		let temp3products = []
		filteredProducts.map((product, i) => {
			temp3products.push(product)
			if (i % 3 === 2) {
				products3group.push(temp3products)
				temp3products = []
			}
		})
		return products3group
	}
	const renderProducts = () => {	
		let products3group = getProductGroups()
		let allRows = []

		// products3group = [
			//, [product1, product2, product3]
			// [product4, product5, product6]
		// ]
		products3group.map(productgroup => {
			let bootstrapRow = []
			productgroup.map(product => {
				bootstrapRow.push(
					<ProductItem size="col-md-4" title={product.title} op={product.unitPrice[0].oldPrice} np={product.unitPrice[0].newPrice} hasOffer={product.hasOffer} key={product.id} url={product.images[0].imageName} />
				)
			})
			// allRows = [
				// <div> [<ProductItem1>, <ProductItem2>, <ProductItem3>] </div>
				// <div> [<ProductItem4>, <ProductItem5>, <ProductItem6>] </div>
			// ]
			allRows.push(
				<>
				<div className="agile_top_brands_grids">
					{bootstrapRow}
				</div>
				<div className='clearfix'></div>
				</>
			)
		})

		return allRows
	}
	useEffect(() => {
		setFilteredProducts(products.slice((currPage - 1)*perPage, currPage*perPage))
	}, [currPage])

	useEffect(() => {
		let categoryProducts
		if (category_title && categories.length > 0 && !subcategory_title) {
			categoryProducts = products.filter(product => product.categoryTitle === category_title)
		} else {
			categoryProducts = products.filter(product => product.categoryTitle === subcategory_title)
		}
		let numPages = parseInt(categoryProducts.length / perPage) + 1
		setnpages(numPages)  
		setFilteredProducts(categoryProducts)
	},[category_title, categories])

  return (
    <>
    <div className="col-md-8 products-right">
        <div className="products-right-grid">
            <div className="products-right-grids">
		        <div className="sorting">
			        <select id="country" className="frm-field required sect">
				        <option value="null">Default sorting</option>
				        <option value="null">Sort by popularity</option> 
				        <option value="null">Sort by average rating</option>					
				        <option value="null">Sort by price</option>								
			        </select>
		        </div>
		        <div className="sorting-left">
			        <select id="country1" className="frm-field required sect">
			        <option value="null">Item on page 9</option>
			        <option value="null">Item on page 18</option> 
                    <option value="null">Item on page 32</option>					
                    <option value="null">All</option>								
			        </select>
				</div>
				<div className="clearfix"> </div>
				{
					loader()
				}
				</div>

            <nav className="numbering">
					<ul className="pagination paging">
						{/* <li>
							<a aria-label="Previous" onClick={() => setcurrPage(currPage-1)}>
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li> */}
						{
							[...Array(nPages).keys()].map((pageNumber) => {
								pageNumber += 1
								return (
									<li key={pageNumber}><a onClick={() => setcurrPage(pageNumber)}>{pageNumber}</a></li>
								)
							})
						}
						{/* <li>
							<a aria-label="Next" onClick={() => setcurrPage(currPage+1)}>
							<span aria-hidden="true">&raquo;</span>
							</a>
						</li> */}
					</ul>
				</nav>
	    </div>
    </div>
    </>
  )
}

export default ProductItems