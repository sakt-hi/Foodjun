// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { DataProvider } from './utils/DataContext';
import Footer from './components/Footer';
import DevInfo from './components/DevInfo';
import Home from './components/Home';
import About from './components/About';

const App = () => {

    return (
        <DataProvider>
            <div className="app">
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                    <DevInfo />
                    <Footer />
                </Router>
            </div>
        </DataProvider>
    );
}

export default App;
