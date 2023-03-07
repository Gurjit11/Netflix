import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Account from './pages/Account';
import ProtectedRoute from './Components/ProtectedRoute';

// https://netflix-webapp-1d352.web.app/

function App() {
  return (
    <div className="bg-black scroll-hidden h-screen">
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path='/account' element={
        <ProtectedRoute>
          <Account/>
        </ProtectedRoute>
         } />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
