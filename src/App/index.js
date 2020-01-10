import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Calendar from './pages/Calendar';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Header} />
                <Route path="/" exact component={Home} />
                <Route path="/" exact component={About} />
                <Route path="/" exact component={Calendar} />
                <Route path="/" exact component={Footer} />
            </BrowserRouter>
        </div>
    );
}

export default App;