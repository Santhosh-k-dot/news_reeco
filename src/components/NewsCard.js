import React from 'react';

import '../styles/NewsCard.css';

const NewsCard = ({ article }) => {
    return (
        <div className="news-article-card">
            <img id="news-image" src={article.urlToImage} alt="News" />
            <div className="content">
                <h2 id="news-title" className="title">{article.title}</h2>
                <p id="news-desc" className="description">{article.description}</p>
                <p id="news-date">
                    {new Date(article.publishedAt).toLocaleString('en-US', {
                        timeZone: 'Asia/Jakarta',
                    })}
                </p>
                <a
                    id="news-link"
                    className="read-more"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', borderRadius: '5px', textDecoration: 'none' }}
                >
                    Read more
                </a>

            </div>
        </div>
    );
};

export default NewsCard;
