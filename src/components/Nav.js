import React, { Component } from 'react'

import Link from 'gatsby-link'
import logo from '../assets/images/flag.gif'

let HeaderLink = ({to, label, ...props}) =>
<li><Link to={`${to}`}><span>{label}</span></Link></li>


//not used 
let VWCLink = () =>
<Link to="/">
  <img src={logo} alt="#VetsWhoCode Logo" style={{width: '50px', height: 'auto'}}/>
</Link>

        // <div className="container">
        //   <div className="navbar-header">
        //     <button
        //       type="button"
        //       className="navbar-toggle collapsed"
        //       data-toggle="collapse"
        //       data-target="#main-nav-collapse"
        //       aria-expanded="false"
        //     >
        //       {' '}
        //       <span className="sr-only">#VetsWhoCode</span> <span className="ion-drag" />
        //     </button>
        //     <div className="navbar-brand" itemScope="" itemType="https://schema.org/Organization">
        //       {' '}
        //       <span className="sr-only">#VetsWhoCode</span>
        //       <Link to="/">
        //         <img src={logo} alt="#VetsWhoCode Logo" className="logo_holder" />
        //       </Link>
        //     </div>
        //   </div>
        //   <div
        //     className="navbar-collapse collapse"
        //     id="main-nav-collapse"
        //     aria-expanded="false"
        //     style={{ height: '1px' }}
        //   >

class Nav extends Component {

  render() {
    return (
      <nav
        id="fixedTopNav"
        className="navbar navbar-fixed-top main-navigation navbar-solid"
        itemScope=""
        itemType="https://schema.org/SiteNavigationElement"
        role="navigation"
      >
        <div className="container">
          <div className="navbar-header">
              <Link to="/" className="navbar-brand" itemType="https://schema.org/Organization" itemScope="" >
                <img src={logo} alt="#VetsWhoCode Logo" className="logo_holder" />
              </Link>
          </div>
            <ul className="nav navbar-nav navbar-right" role="menu">
                <HeaderLink to={"/"} label={"Home"}/>
                <HeaderLink to={"/syllabus"} label={"Syllabus"}/>
                <HeaderLink to={"/mentor"} label={"Mentors"}/>
                <HeaderLink to={"/apply"} label={"Apply"}/>
                <HeaderLink to={"/donate"} label={"Donate"}/>
                <HeaderLink to={"/contact"} label={"Contact Us"}/>         
              <li><a href="https://medium.com/vets-who-code" without="true" rel="noopener noreferrer" target="_blank">
                  <span>Blog</span>
              </a></li>
            </ul>
          </div>
      </nav>
    )
  }
}

export default Nav
