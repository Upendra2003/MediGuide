import { useState } from 'react'
import './App.css'
import SymptomsPage from './Pages/SymptomsPage'
import SymptomPage from './Pages/SymptomPage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegisterPage from './Pages/RegisterPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/register' element={<RegisterPage/> } />


            <Route path='/symptoms' exact element={<SymptomsPage/> } />
            <Route path='/symptoms/:symptomId/' exact element={<SymptomPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
    
  )
}

export default App
