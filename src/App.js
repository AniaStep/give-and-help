import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { LoggedOut } from './components/LoggedOut';
import { LoggedIn } from './components/LoggedIn';
import { PageNotFound } from "./components/PageNotFound";
import { useAuth } from "./firebase/auth-provider";

function App() {
    const user = useAuth();
    console.log(user);

  return (
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logowanie" element={<Login />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wylogowano" element={<LoggedOut />} />
        <Route path="/oddaj-rzeczy" element={<LoggedIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  </Router>
  );
}

export default App;
