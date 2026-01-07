import { Produkt } from './Produkt';
import './NowyKoszyk.css';

export const NowyKoszyk = () => {
    const Produkty = ['Jabłko', 'Gruszka', 'Banan', 'Winogrono', 'Pomarańcza'];

    return (
        <div className="nowyKoszyk">
            <h2>Nowy Koszyk (Zadanie 1.2)</h2>
            {Produkty.map((nazwa, index) => (
                <Produkt key={index} nazwa={nazwa} />
            ))}
        </div>
    );
};
