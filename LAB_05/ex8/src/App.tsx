import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Article } from './pages/Article';
import { AddArticle } from './pages/AddArticle';
import { Licznik } from './components/liczniki/Licznik';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink>
          <NavLink to="/dodaj" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dodaj Artykuł</NavLink>
          <NavLink to="/licznik" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Licznik (8.1)</NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/dodaj" element={<AddArticle />} />
            <Route path="/licznik" element={
              <div className="page">
                <h1>Zadanie 8.1: Licznik z LocalStorage</h1>
                <p>Stan tego licznika jest zapisywany w localStorage. Spróbuj odświeżyć stronę lub wróć tu później.</p>
                <Licznik />
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
