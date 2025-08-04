import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login.jsx"
import Users from './pages/Users.jsx';
import Settings from './pages/Settings.jsx';
import Analytics from './pages/Analytics.jsx';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  },[theme])
  const renderProtectedRoute = (element) => (
    isAuthenticated ? (
      <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f1f5f9' }}>
        <Sidebar isOpen={isSidebarOpen} setIsAuthenticated={setIsAuthenticated} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header toggleSidebar={toggleSidebar} />
          <main style={{ flex: 1, padding: '1.5rem', overflowY: 'auto' }}>
            {element}
          </main>
        </div>
      </div>
    ) : (
      <Navigate to="/login" />
    )
  );

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login'
      element={
        isAuthenticated?(
          <Navigate to="/"/>
        ):(
          <Login setIsAuthenticated={setIsAuthenticated}/>
        )
      }
      />
      <Route path='/' element={renderProtectedRoute(<Dashboard />)} />
      <Route path='/users' element={renderProtectedRoute(<Users />)} />
      <Route path='/settings' element={renderProtectedRoute(<Settings theme={theme} toggleTheme={toggleTheme} />)} />
      <Route path='/analytics' element={renderProtectedRoute(<Analytics />)} />
      
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;