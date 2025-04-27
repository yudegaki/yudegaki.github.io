import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import CoffeeQuiz from "./pages/CoffeeQuiz";
// import CoffeeBeltQuiz from "./pages/CoffeeBeltQuiz";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffeequiz" element={<CoffeeQuiz />} />
        {/* <Route path="/coffeebeltquiz" element={<CoffeeBeltQuiz />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
