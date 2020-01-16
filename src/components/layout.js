/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Footer } from '../styles/components'

import Header from './header'

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer>
      <p>
        Made with 💚 in Gatsby course at{' '}
        <a href="https://www.platzi.com">Platzi</a>
      </p>
    </Footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
