import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShopProvider } from './ShopContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/produs/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </ShopProvider>
    </BrowserRouter>
  );
}
