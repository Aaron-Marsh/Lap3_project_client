/* istanbul ignore file */

import './App.css';
import { Routes, Route } from 'react-router-dom';

import {Welcome, Setup, Quiz, Leaderboards, NotFound } from './pages/index'
// import Setup from './pages/Setup'
// import Quiz from './pages/Quiz'
// import Leaderboards from './pages/Leaderboards'



function App() {
        return (
        <>
        {/* <h1 aria-label="main-title">This is the main title in the App.js folder</h1> */}
        <main>
                <Routes>
                        <Route path="/" element={
                                <Welcome />
                        }/>
                        <Route path="/setup" element={
                                <Setup />
                        }/>
                        <Route path="/quiz" element={
                                <Quiz />
                        }/>
                        <Route path="/leaderboards" element={
                                <Leaderboards />
                        }/>
                          <Route path="*" element={
                                <NotFound />
                        }/>
                </Routes>
        </main>
        </>
        );
}

export default App;
