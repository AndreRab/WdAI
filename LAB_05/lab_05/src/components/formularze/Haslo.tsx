import { useState } from 'react';
import './Haslo.css';

export const Haslo = () => {
    const [haslo, setHaslo] = useState('');
    const [powtorzHaslo, setPowtorzHaslo] = useState('');

    let message = '';
    if (!haslo && !powtorzHaslo) {
        message = 'Proszę wprowadzić hasło';
    } else if (haslo !== powtorzHaslo) {
        message = 'Hasła nie są zgodne';
    } else {
        message = 'Hasła są zgodne';
    }

    return (
        <div className="haslo">
            <h2>Hasło (Zadanie 3.2)</h2>
            <input
                type="text"
                placeholder="Hasło"
                value={haslo}
                onChange={(e) => setHaslo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Powtórz Hasło"
                value={powtorzHaslo}
                onChange={(e) => setPowtorzHaslo(e.target.value)}
            />
            <div>{message}</div>
        </div>
    );
};
