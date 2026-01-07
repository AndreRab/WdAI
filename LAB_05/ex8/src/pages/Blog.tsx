import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../types';

export const Blog = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('articles');
        if (saved) {
            setArticles(JSON.parse(saved));
        }
    }, []);

    return (
        <div className="page blog">
            <h1>Lista Artykułów</h1>
            {articles.length === 0 ? (
                <p>Brak artykułów na blogu.</p>
            ) : (
                <ul className="article-list">
                    {articles.map(article => (
                        <li key={article.id} className="article-item">
                            <Link to={`/article/${article.id}`}>{article.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="actions">
                <Link to="/dodaj" className="link-button">Dodaj nowy artykuł</Link>
                <Link to="/" className="link-secondary">Powrót do strony głównej</Link>
            </div>
        </div>
    );
};
