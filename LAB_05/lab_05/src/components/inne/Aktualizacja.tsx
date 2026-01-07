import { useState } from 'react';
import './Aktualizacja.css';

export const Aktualizacja = () => {
    const [produkt, setProdukt] = useState({ nazwa: 'Pomidor', cena: 50 });

    const zmienCene = () => {
        setProdukt(prev => ({ ...prev, cena: prev.cena + 50 }));
    };

    return (
        <div className="aktualizacja">
            <h2>Aktualizacja (Zadanie 4.2)</h2>
            <div>Aktualnie {produkt.nazwa} kosztuje {produkt.cena}</div>
            <button onClick={zmienCene}>Zmień cenę</button>
        </div>
    );
};
