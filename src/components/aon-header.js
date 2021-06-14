import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    {/* <div>
      <h1>
        {siteTitle}
      </h1>
    </div> */}
    <nav class="navbar navbar-light">
      <div class="container">
        <Link class="navbar-brand" to="/" style={{padding:2, lineHeight:0, border:`1px solid #333333`}}>
          <StaticImage src="../images/wana-logo.png" width={50} quality={100}/>
        </Link>
        {/* <Link to="/" class="navbar-brand">
          {siteTitle}
        </Link> */}
        <i class="bi-list" style={{fontSize:`3em`, lineHeight:0}} 
          data-bs-toggle="collapse" data-bs-target="#navbarNav" 
          aria-controls="navbarNav" aria-expanded="false" 
          aria-label="Toggle navigation"/>
          {/* <a class="nav-link" style={{color:`white`}} aria-current="page" href="#">Home</a>
          <a class="nav-link" style={{color:`white`}} href="#">Features</a>
          <a class="nav-link" style={{color:`white`}} href="#">Pricing</a>
          <a class="nav-link" style={{color:`white`}} href="#">Disabled</a> */}
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav h1" style={{alignItems:`flex-end`}}>
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            <Link class="nav-link" to="/page-2">Page 2</Link>
            <Link class="nav-link" to="/404">404: Not Found </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
