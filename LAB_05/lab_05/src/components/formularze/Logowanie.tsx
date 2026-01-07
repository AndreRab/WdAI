import { useState } from 'react';
import './Logowanie.css';

export const Logowanie = () => {
    const [nazwa, setNazwa] = useState('');
    const [haslo, setHaslo] = useState('');
    const [powtorzHaslo, setPowtorzHaslo] = useState('');

    const isDisabled = !nazwa || !haslo || !powtorzHaslo;

    const handleLogin = () => {
        if (haslo !== powtorzHaslo) {
            alert('Hasła nie są zgodne');
        } else {
            alert('Zalogowano poprawnie');
        }
    };

    return (
        <div className="logowanie">
            <h2>Logowanie (Zadanie 3.3)</h2>
            <input
                type="text"
                placeholder="Nazwa użytkownika"
                value={nazwa}
                onChange={(e) => setNazwa(e.target.value)}
            />
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
            <button disabled={isDisabled} onClick={handleLogin}>Logowanie</button>
        </div>
    );
};
