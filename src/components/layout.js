import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from './Reusable/Footer';
import Navbar from './Reusable/Navbar';

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({children}) => (
  <>
  <Navbar />
  {children}
  <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
