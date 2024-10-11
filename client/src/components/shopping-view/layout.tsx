import React from 'react'
import { Outlet } from 'react-router-dom'
import ShopHeader from './header'
import ShopFooter from './Footer/Footer'

function ShoppingLayout() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <ShopHeader />
        <main className='container mx-auto py-5'>
          <Outlet />
        </main>
      </div>
      <ShopFooter />
    </div>
  )
}

export default ShoppingLayout