import React from 'react'
import { Outlet } from 'react-router-dom'

function Authlayout() {
  return (
    <div>
        layout
        <Outlet />
    </div>
  )
}

export default Authlayout