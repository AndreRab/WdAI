import { useState, useEffect } from 'react';
import './Licznik.css';

export const Licznik = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Hello world');
    }, []);

    useEffect(() => {
        if (count > 0) {
            console.log(`Licznik zwiększył się do ${count}`);
        }
    }, [count]);

    return (
        <div className="licznik-efekt">
            <h2>Licznik z Efektem (Zadanie 6.1)</h2>
            <div>Stan licznika: {count}</div>
            <button onClick={() => setCount(count + 1)} className="button">Dodaj</button>
        </div>
    );
};
