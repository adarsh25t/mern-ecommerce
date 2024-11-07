import { assets } from '@/assets';
import { Button } from '@/components/ui/button';
import { logoutUser } from '@/store/auth-slice';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function ShopHeader() {


    const userState = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const isAuthenticated = userState?.isAuthenticated;

    const handleLogout = async() => {
        dispatch(logoutUser(null));
    }

    return (
        <header className=' bg-white'>
            <div className="container mx-auto flex justify-between items-center px-5 py-2">
                <Link to='/home'>
                    <img src={assets.shopify_logo} width={60} height={60} alt="logo" />
                </Link>

                <div className="flex items-center gap-5">

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