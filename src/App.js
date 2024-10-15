// App.js

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { GiGamepad } from 'react-icons/gi';  // Import Game icon
import { FaBook } from 'react-icons/fa';      // Import Book icon
import { FaFilm } from 'react-icons/fa';      // Import Anime icon
import './App.css';                          // Import consolidated CSS
import Movie from './pages/Movie';
import Profile from './pages/Profile';
import Detail from './pages/Detail';          // Import component Detail
import Anime from './pages/Anime';            // Import Anime component
import Game from './pages/Game';              // Import Game component
import Book from './pages/Book';              // Import Book component
import Login from './pages/Login';            // Import Login component
import DBook from './pages/DBook';
import DAnime from './pages/DAnime';
import DGame from './pages/DGame';

function App() {
    return (
        <BrowserRouter>
            <header>
                <p id="titleGroup">Kelompok 42</p>
            </header>
            <Routes>
                <Route path="/" element={<Login />} /> {/* Redirect root path to Login */}
                <Route path="/login" element={<Login />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/anime" element={<Anime />} />
                <Route path="/game" element={<Game />} />
                <Route path="/book" element={<Book />} />
                <Route path="/dbook/:id" element={<DBook />} />
                <Route path="/danime/:id" element={<DAnime />} />
                <Route path="/dgame/:id" element={<DGame />} />
            </Routes>
            <footer>
                <NavLink to="/movie" className="iconWrapper">
                    <HiHome className="icon" /> Movie
                </NavLink>
                <NavLink to="/profile" className="iconWrapper">
                    <MdGroup className="icon" /> Profile
                </NavLink>
                <NavLink to="/anime" className="iconWrapper">
                    <FaFilm className="icon" /> Anime
                </NavLink>
                <NavLink to="/game" className="iconWrapper">
                    <GiGamepad className="icon" /> Game
                </NavLink>
                <NavLink to="/book" className="iconWrapper">
                    <FaBook className="icon" /> Book
                </NavLink>
            </footer>
        </BrowserRouter>
    );
}

export default App;
