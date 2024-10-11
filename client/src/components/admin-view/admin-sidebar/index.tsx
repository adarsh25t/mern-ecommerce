import { ChartBarStacked, ChartNoAxesCombined, LayoutDashboard, ShoppingBasket, Store } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom';

const routes = [
    {
        path: '/admin/dashboard',
        label: 'Dashboard',
        icon: <LayoutDashboard size={14}/>
    },
    {
        path: '/admin/products',
        label: 'Products',
        icon: <ShoppingBasket size={14}/>
    },
    {
        path: '/admin/categories',
        label: 'Categories',
        icon: <ChartBarStacked size={14}/>
    },
    {
        path: '/admin/orders',
        label: 'Orders',
        icon: <Store size={14}/>
    },

];

function AdminSideBar() {

    const location = useLocation()


    return (
        <aside className="w-64 h-screen flex flex-col justify-between p-4 shadow-md">
            <div className="flex flex-col gap-6">
                <div className="flex items-center  gap-2">
                    <ChartNoAxesCombined />
                    <h1 className='font-bold text-xl'>Admin Dashboard</h1>
                </div>

                {/* Admin-specific routes */}
                <nav className="flex flex-col gap-1">
                    {routes.map(({ path, label, icon }) => (
                        <Link 
                            key={path} 
                            to={path} 
                            className={`flex items-center gap-2 p-2  rounded-md admin-nav-menuitem
                            ${location.pathname === path ? 'bg-zinc-800 text-white' : 'text-black'}`}>
                            {icon}
                            <span>{label}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    )
}

export default AdminSideBar