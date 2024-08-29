import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import axios from 'axios';
import '../styles/NewsList.css';

const NewsList = ({ searchQuery }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const defaultQuery = 'real estate'; // Default query for real estate news

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: searchQuery || defaultQuery,
                        apiKey: '1c56753048894adcad56e0abc8bd143d' // Replace with your valid API key
                    }
                });
                setArticles(result.data.articles);
            } catch (error) {
                console.error('Error fetching news articles:', error.response ? error.response.data : error.message);
                setError(error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [searchQuery]);

    return (
        <div className="news-cards-container">
            {loading && articles.length === 0 && <p>Loading news articles...</p>}
            {error && <p className="error-message">Failed to load news articles: {error}</p>}
            {!loading && articles.length === 0 && !error && <p>No articles found. Please try a different search.</p>}
            {articles.length > 0 && (
                articles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))
            )}
        </div>
    );
};

export default NewsList;
