import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import NewsList from './components/NewsList';
import './App.css';

function App() {
    // State to manage the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle search input from Navbar component
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="App">
            {/* Navbar component with search functionality */}
            <Navbar onSearch={handleSearch} />

            {/* Header component */}
            <Header />

            {/* NewsList component to display articles based on search query */}
            <NewsList searchQuery={searchQuery} />
        </div>
    );
}

export default App;
