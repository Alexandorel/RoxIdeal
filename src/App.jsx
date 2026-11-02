import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShopProvider } from './ShopContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop';

export default function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
        <Footer />
      </ShopProvider>
    </BrowserRouter>
  );
}
