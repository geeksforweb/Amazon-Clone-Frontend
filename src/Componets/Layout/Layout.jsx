import React from 'react'
import Header from '../Header/Header'
import '../../Pages/Landing/Landing'

function Layout({children}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
