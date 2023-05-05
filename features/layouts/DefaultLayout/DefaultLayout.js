import Footer from '@myapp/features/common/modules/Footer'
import Navigation from '@myapp/features/common/modules/Navigation/components/Navigation'
import React from 'react'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout