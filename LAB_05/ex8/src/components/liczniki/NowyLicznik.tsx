import { useState } from 'react';
import { Przycisk } from './Przycisk';
import './NowyLicznik.css';

export const NowyLicznik = () => {
    const [count, setCount] = useState(0);

    const inkrementuj = () => {
        setCount(count + 1);
    };

    return (
        <div className="nowyLicznik">
            <h2>Nowy Licznik (Zadanie 2.2)</h2>
            <div>Stan licznika: {count}</div>
            <Przycisk onClick={inkrementuj} />
        </div>
    );
};
