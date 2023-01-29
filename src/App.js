import React from 'react'
import {Container} from 'react-bootstrap'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { AuthState } from './contexts/AuthContext'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import PrivateRouter from './components/PrivateRoute'
import PasswordReset from './components/PasswordReset'

const App = () => {
  return (
    <AuthState>
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh',width:'500px'}}>
      <div>
        <Router>
          <Routes>
            {/* <Route exact path='/' element={<Dashboard/>}>
              <Route element={<Login/>}/>
            </Route> */}

            {/* The following method for private route works */}
            <Route path='/' element={<PrivateRouter>
              <Dashboard/>
            </PrivateRouter>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/password-reset' element={<PasswordReset/>}/>
          </Routes>

        </Router>
        
      </div>
    </Container>
    </AuthState>
  )
}

export default App