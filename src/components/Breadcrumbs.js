import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumbs(props) {
  return (
    <>
    {/* <!-- breadcrumbs --> */}
    <div className="breadcrumbs">
      <div className="container">
        <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
          <li><Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link ></li>
          <li className="active">{props.title}</li>
        </ol>
      </div>
    </div>
    {/* <!-- //breadcrumbs --> */}
    </>
  )
}

export default Breadcrumbs