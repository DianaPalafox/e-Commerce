import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
//import Cart from './pages/ShoppingCart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ShopContextProvider from './context/shop-context';

function App() {
  return (
    <Router> 
    <div className="App">
      <ShopContextProvider>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage />}/>
          <Route path='/shop' element={<ShopPage />}/>
          <Route path='/product/:productId' element={<ProductPage />}/>
        </Routes>
        </ShopContextProvider>
    </div>
    </Router>
  );
}

export default App;
