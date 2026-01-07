import { useState, useEffect } from 'react';
import './Licznik.css';

export const Licznik = () => {
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('licznik_8_1');
        return saved ? parseInt(saved, 10) : 0;
    });

    // Update localStorage whenever count changes
    useEffect(() => {
        localStorage.setItem('licznik_8_1', count.toString());
    }, [count]);

    return (
        <div className="licznik">
            <h2>Licznik (Zadanie 8.1)</h2>
            <div>Stan licznika: {count}</div>
            <button onClick={() => setCount(count + 1)} className="button">Dodaj</button>
        </div>
    );
};
