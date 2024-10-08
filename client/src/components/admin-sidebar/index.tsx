import { ChartNoAxesCombined, LogOut } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function AdminSideBar() {

    // Admin-specific routes
    

    return (
        <aside className="w-64 h-screen flex flex-col justify-between p-4 border-r">
            <div className="flex items-center gap-2">
                <ChartNoAxesCombined />
                <h1>Admin Dashboard</h1>
            </div>

            {/* Admin-specific routes */}

            <Button className='w-full flex gap-2'>
                    <LogOut />
                    Logout
                </Button>

        </aside>
    )
}

export default AdminSideBar