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
       <ul>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
  
      <Routes>
        <Route path="/" element={<ListadoPeliculas />}></Route>
        <Route path="/movies" element={<ListadoPeliculas />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
