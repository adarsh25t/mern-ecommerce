
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Authlayout from './components/auth/layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AdminLayout from './components/admin-view/layout'
import Dashboard from './pages/admin-view/dashboard'
import ShoppingLayout from './components/shopping-view/layout'
import ShoppingHomePage from './pages/shopping-view/home'
import ShoppingAccountPage from './pages/shopping-view/account'
import ShoppingCheckoutPage from './pages/shopping-view/checkout'
import ShoppingListingPage from './pages/shopping-view/listing'
import NotFoundPage from './pages/not-found'
import CheckAuth from './components/common/check-auth'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store/store'
import { useEffect } from 'react'
import { checkUser } from './store/auth-slice'

function App() {

  const userState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = userState?.isAuthenticated;
  const user = userState?.user;

  useEffect(() => {
    dispatch(checkUser(null))
  },[dispatch])

  if (userState.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex flex-col overflow-hidden bg-white'>

      {/* ALL ROUTES */}
      <Routes>
        <Route path='/auth' element={
          <CheckAuth
            isAuthenticated={isAuthenticated}
            user={user}
          >
            <Authlayout />
          </CheckAuth>
        }>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path='/admin' element={
          <CheckAuth
            isAuthenticated={isAuthenticated}
            user={user}
          >
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>

        <Route path='/shop' element={
          <CheckAuth
            isAuthenticated={isAuthenticated}
            user={user}
          >
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path='home' element={<ShoppingHomePage />} />
          <Route path='account' element={<ShoppingAccountPage />} />
          <Route path='checkout' element={<ShoppingCheckoutPage />} />
          <Route path='list' element={<ShoppingListingPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>

    </div>
  )
}

export default App
