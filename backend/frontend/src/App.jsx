import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Hiw from './pages/Hiw'
import Predict  from './Pages/Predict'
import Profile from './pages/Profile'
import Temp from './Pages/temp'
import STM from './Pages/STM'
import Register from './pages/Register'
import Error from './pages/error'
import './App.css'
import PrivateRoute from './utils/PrivateRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import LoginPage from './pages/LoginPage'
import Hospitals from './Pages/Hospitals'


export default function App() {

  return (
    <>
    <AuthProvider>
      <Navbar/>
      <Routes>
        
            <Route exact path='/' element={<Home/>} />
            <Route path='/Hiw' element={<Hiw/>} />
            <Route path='/Predict' element={<Predict/>}/>
            <Route path='/STM' element={<STM/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route path='/hospitals' element={<Hospitals/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/temp' element={<Temp/>}/>
            <Route path='*' element={<Error/>}/>
        
      </Routes>
      <Footer/> 
    </AuthProvider>
    </>
  )
}
