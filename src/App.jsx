import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import SignInPage from './pages/SignInPage'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signin' element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
