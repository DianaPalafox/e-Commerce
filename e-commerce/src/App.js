import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ShopPage from './pages/ShopPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router> 
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePage />}/>
        <Route path='/shop' element={<ShopPage />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
