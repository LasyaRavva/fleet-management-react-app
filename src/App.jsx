import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login  from './pages/Login';
import Admin from './pages/Admin';

function App() {
  
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path = "/" element ={<Navigate to = "/login" replace/>}/>
          <Route path = "/login" element ={<Login/>}/>
          <Route path = "/admin" element ={<ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
