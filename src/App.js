import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import DetailsPage from './Components/DetailsPage/DetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="detailPage" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
