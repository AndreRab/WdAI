import { useState } from 'react';
import './Licznik.css';

export const Licznik = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="licznik">
            <h2>Licznik (Zadanie 2.1)</h2>
            <div>Stan licznika: {count}</div>
            <button onClick={() => setCount(count + 1)} className="button">Dodaj</button>
        </div>
    );
};
