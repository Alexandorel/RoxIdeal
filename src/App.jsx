import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* paginile vin în etapa 2 */}
        <Route path="/" element={<main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
