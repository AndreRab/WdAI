import { useState } from 'react';
import './Dodawanie.css';

interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
}

interface DodawanieProps {
    onAdd: (student: Student) => void;
}

export const Dodawanie = ({ onAdd }: DodawanieProps) => {
    const [imie, setImie] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [rocznik, setRocznik] = useState('');

    const handleAdd = () => {
        if (!imie || !nazwisko || !rocznik) {
            alert('Wszystkie pola muszą być wypełnione!');
            return;
        }

        const rocznikNumber = Number(rocznik);
        if (isNaN(rocznikNumber)) {
            alert('Rocznik musi być liczbą!');
            return;
        }

        onAdd({ imie, nazwisko, rocznik: rocznikNumber });
        setImie('');
        setNazwisko('');
        setRocznik('');
    };

    return (
        <div className="dodawanie-form">
            <input
                type="text"
                placeholder="Imię"
                value={imie}
                onChange={(e) => setImie(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nazwisko"
                value={nazwisko}
                onChange={(e) => setNazwisko(e.target.value)}
            />
            <input
                type="text"
                placeholder="Rocznik"
                value={rocznik}
                onChange={(e) => setRocznik(e.target.value)}
            />
            <button onClick={handleAdd}>Dodaj</button>
        </div>
    );
};
