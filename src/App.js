import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { PageNotFound } from "./components/PageNotFound";

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<Login />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  </Router>
  );
}

export default App;
