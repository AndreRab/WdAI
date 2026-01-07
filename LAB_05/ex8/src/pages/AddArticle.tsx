import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import type { Article } from '../types';

export const AddArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert('Proszę wypełnić wszystkie pola.');
            return;
        }

        const savedArticles = localStorage.getItem('articles');
        const articles: Article[] = savedArticles ? JSON.parse(savedArticles) : [];

        const newArticle: Article = {
            id: Date.now(), // Simple unique ID
            title,
            content
        };

        const updatedArticles = [...articles, newArticle];
        localStorage.setItem('articles', JSON.stringify(updatedArticles));

        navigate('/blog');
    };

    return (
        <div className="page add-article">
            <h1>Dodaj nowy artykuł</h1>
            <form onSubmit={handleSubmit} className="article-form">
                <div className="form-group">
                    <label htmlFor="title">Tytuł</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Wpisz tytuł artykułu..."
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Treść</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Wpisz treść artykułu..."
                        rows={10}
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="link-button">DODAJ</button>
                    <Link to="/blog" className="link-secondary">Anuluj</Link>
                </div>
            </form>
        </div>
    );
};
