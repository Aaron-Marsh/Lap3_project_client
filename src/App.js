import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1 aria-label="main-title">Hello</h1>
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
                </Routes>
      </main>
    </>
  );
}

export default App;
