import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Article as ArticleType } from '../types';

export const Article = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<ArticleType | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem('articles');
        if (saved) {
            const articles: ArticleType[] = JSON.parse(saved);
            const found = articles.find(a => a.id === Number(id));
            setArticle(found || null);
        }
    }, [id]);

    if (!article) {
        return (
            <div className="page article-detail">
                <h1>Artykuł nie został znaleziony</h1>
                <Link to="/blog">Wróć do listy artykułów</Link>
            </div>
        );
    }

    return (
        <div className="page article-detail">
            <article className="glass-card">
                <h1>{article.title}</h1>
                <div className="content">
                    {article.content}
                </div>
            </article>
            <div className="actions">
                <Link to="/blog" className="link-button">Wróć do bloga</Link>
            </div>
        </div>
    );
};
