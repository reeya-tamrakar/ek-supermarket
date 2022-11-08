import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Categories from '../components/Categories'
import ProductItems from '../components/ProductItems'

function Gourmet() {
  return (
    <>
    <Breadcrumbs title = 'Gourmet' />
    <div className="products">
		<div className="container">
            <Categories />
            <ProductItems />
        </div>
    </div>
    </>
  )
}

export default Gourmet