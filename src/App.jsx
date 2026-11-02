import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShopProvider } from './ShopContext';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <Header />
        <Routes>
          <Route path="/" element={<main />} />
        </Routes>
        <Footer />
      </ShopProvider>
    </BrowserRouter>
  );
}
