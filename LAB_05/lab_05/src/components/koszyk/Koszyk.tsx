import { Produkt } from './Produkt';
import './Koszyk.css';

export const Koszyk = () => {
    return (
        <div className="koszyk">
            <h2>Koszyk (Zadanie 1.1)</h2>
            <Produkt nazwa="Jabłko" />
            <Produkt nazwa="Gruszka" />
            <Produkt nazwa="Banan" />
            <Produkt nazwa="Winogrono" />
            <Produkt nazwa="Pomarańcza" />
        </div>
    );
};
