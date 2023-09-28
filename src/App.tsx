import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Home from './pages/Home/Home';
import Header from './shared/Header/Header';

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/month-statictics" element={<MonthStatistics />} />
            </Routes>
        </div>
    );
}

export default App;
