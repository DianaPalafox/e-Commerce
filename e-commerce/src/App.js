import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router> 
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePage />}/>
        <Route path='/shop' element={<ShopPage />}/>
        <Route path='/product/:productId' element={<ProductPage />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
