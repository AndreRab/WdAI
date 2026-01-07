import { useState, useEffect } from 'react';
import { Komentarz, type KomentarzProps } from './Komentarz';
import './Komentarze.css';

interface CommentsResponse {
    comments: KomentarzProps[];
    total: number;
    skip: number;
    limit: number;
}

export const Komentarze = () => {
    const [comments, setComments] = useState<KomentarzProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/comments')
            .then(res => res.json())
            .then((data: CommentsResponse) => {
                setComments(data.comments);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching comments:', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="komentarze-container">
            <h2>Komentarze (Zadanie 7.2)</h2>
            {loading ? (
                <div className="loading">Ładowanie komentarzy...</div>
            ) : (
                comments.map(comment => (
                    <Komentarz
                        key={comment.id}
                        {...comment}
                    />
                ))
            )}
        </div>
    );
};
