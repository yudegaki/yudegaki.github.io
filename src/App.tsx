import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from '@/pages/Home';
import CoffeeQuiz from '@/pages/CoffeeQuiz';
import GeoCoffeeQuiz from '@/pages/GeoCoffeeQuiz';
import Navbar from '@/components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffeequiz" element={<CoffeeQuiz />} />
        <Route path="/geo-coffee-quiz" element={<GeoCoffeeQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
