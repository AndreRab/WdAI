import { useState } from 'react';
import './Formularz.css';

export const Formularz = () => {
    const [text, setText] = useState('');

    return (
        <div className="formularz">
            <h2>Formularz (Zadanie 3.1)</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Wpisz tekst..."
            />
            <div>{text}</div>
        </div>
    );
};
