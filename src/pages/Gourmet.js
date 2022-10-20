import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductItems from '../components/ProductItems'

function Gourmet() {
  return (
    <>
    <Header />
    <Breadcrumbs title = 'Gourmet' />
    <div class="products">
		<div class="container">
            <Categories />
            <ProductItems />
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Gourmet