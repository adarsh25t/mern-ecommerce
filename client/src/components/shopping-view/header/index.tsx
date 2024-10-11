import { assets } from '@/assets';
import { Button } from '@/components/ui/button';
import { RootState } from '@/store/store';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function ShopHeader() {


    const userState = useSelector((state: RootState) => state.auth);
    const isAuthenticated = userState?.isAuthenticated;

    const handleLogout = () => {

    }

    return (
        <header className=' bg-white'>
            <div className="container mx-auto flex justify-between items-center px-5 py-2">
                <Link to='/'>
                    <img src={assets.shopify_logo} width={60} height={60} alt="logo" />
                </Link>

                <div className="flex items-center gap-5">
                    {/* <div className="relative">
                        {user?.profileImage ?
                            <img src={user.profileImage} onClick={() => setShowCollapse(!showCollapse)} width={50} height={50} alt="profile" className='rounded-full cursor-pointer' /> :
                            <CgProfile size={20} className='text-primary cursor-pointer' onClick={() => setShowCollapse(!showCollapse)} />
                        }
                        {showCollapse && user?._id &&
                            (<div className="absolute flex flex-col justify-center text-center items-center gap-2 transition-all top-14 -left-10 bg-white whitespace-nowrap min-w-32 rounded-2xl shadow-md">
                                <Link to='/profile' className='bg-rose-50 p-3 w-full text-sm text-primary font-semibold hover:text-secondary'>My Profile</Link>
                                {user.role === 'Admin' && <Link to='/admin-panel' className='bg-slate-50 p-3 w-full text-sm text-primary font-semibold hover:text-secondary'>Admin Panel</Link>}
                            </div>)
                        }
                    </div> */}

                    {/* <div className="relative">
                        <FaShoppingCart size={20} className='text-primary' />
                        <span className='absolute -top-4 -right-2 w-4 h-4 text-sm rounded-full bg-secondary text-white flex justify-center items-center'>0</span>
                    </div> */}
                    {
                        isAuthenticated ?
                            <Button
                                onClick={handleLogout}
                                className='bg-secondary text-white py-2 px-8 rounded-md text-base hover:bg-primary transition-all'>
                                Logout
                            </Button> :
                            <Link to='/auth/login' className='bg-zinc-800 text-white py-2 px-5 rounded-md text-base hover:bg-primary transition-all'>Sign In</Link>
                    }

                </div>
            </div>
        </header>
    )
}

export default ShopHeader;