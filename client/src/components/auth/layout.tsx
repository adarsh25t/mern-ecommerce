
import { Outlet } from 'react-router-dom'

function Authlayout() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <Outlet />
    </div>
  )
}

export default Authlayout