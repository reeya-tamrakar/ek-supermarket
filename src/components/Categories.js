import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function Categories() {
    let categories = useSelector(state => state.collections.categories)
    let params = useParams()

  return (
    <>
    <div className="col-md-4 products-left">
        <div className="categories">
            <h2>Categories</h2>
            <ul className="cate">
                {
                    categories.map((category) => {
                        return (
                        <div key={category.id}>
                            <li><Link to={"/gourmet/" + category.title}><i className="fa fa-arrow-right" aria-hidden="true"></i>{category.title}</Link></li>
                            <ul>
                            {
                            category.subcategories.map((subcategory) => {
                                return (
                                    <li key={subcategory.id}><Link to={"/gourmet/" + category.title + "/" +subcategory.title}><i className="fa fa-arrow-right" aria-hidden="true" key={subcategory.id}></i>{subcategory.title}</Link></li>
                                )
                            })
                            }
                            </ul>
                        </div>
                        )
                    })
                }
            </ul>
        </div>				
    </div>
    </>
  )
}

export default Categories