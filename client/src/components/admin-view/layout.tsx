import { Outlet } from 'react-router-dom'
import AdminHeader from './admin-header'
import AdminSideBar from './admin-sidebar'

function AdminLayout() {
  return (
    <div className="w-screen flex ">
      <AdminSideBar />
      <main className='flex-1'>
        <AdminHeader />
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout