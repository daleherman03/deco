// App.jsx
import './App.css';
import './components/Header/header.css'; // Import header CSS here
import { Header } from './components/Header/header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
