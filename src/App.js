import './App.css';
import ListadoPeliculas from './componentes/ListadoPeliculas';
import Blog from './componentes/Blog';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListadoPeliculas />}></Route>
        <Route path="/movies" element={<ListadoPeliculas />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
