import './App.css';
import MainPage from './pages/main/MainPage';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Catalog from './pages/catalog/Catalog';

function App() {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path='/catalog' element={<Catalog/>}/>
        </Route>
      </Routes>
  );
}

export default App;
