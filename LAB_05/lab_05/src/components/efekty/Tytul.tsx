import { useState, useEffect } from 'react';
import './Tytul.css';

export const Tytul = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);

    return (
        <div className="tytul-container">
            <h2>Tytuł strony (Zadanie 6.2)</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Wpisz nowy tytuł strony..."
                className="tytul-input"
            />
        </div>
    );
};
