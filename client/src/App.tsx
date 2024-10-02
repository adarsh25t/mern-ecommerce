
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Authlayout from './components/auth/layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App() {


  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* COMMON COMPONENTS */}

      {/* HEADER */}

      {/* MAIN */}
      <Routes>
        <Route path='/auth' element={<Authlayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>

      {/* FOOTER */}
    </div>
  )
}

export default App
