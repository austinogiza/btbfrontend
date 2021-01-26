import React from 'react'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
  <React.Fragment>
  
    {children}
    <Footer/>
  </React.Fragment>
  )
}

export default Layout
