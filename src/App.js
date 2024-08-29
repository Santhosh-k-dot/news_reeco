import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import NewsList from './components/NewsList';
import './App.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="App">
            <Navbar onSearch={handleSearch} />
            <Header />
            <NewsList searchQuery={searchQuery} />
        </div>
    );
}

export default App;
