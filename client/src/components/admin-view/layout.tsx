import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../admin-header'
import AdminSideBar from '../admin-sidebar'

function AdminLayout() {
  return (
    <div className="w-screen flex ">
      <AdminSideBar />
      <main className='flex-1'>
        <AdminHeader />
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout