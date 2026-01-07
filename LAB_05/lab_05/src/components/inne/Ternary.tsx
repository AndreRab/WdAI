import './Ternary.css';

export const Ternary = () => {
    const a = true;
    const b = false;

    return (
        <div className="ternary">
            <h2>Ternary (Zadanie 4.1)</h2>
            <div>{a ? 'Stwierdzenie a jest prawdziwe' : 'Stwierdzenie a jest fałszywe'}</div>
            <div>{b ? 'Stwierdzenie b jest prawdziwe' : 'Stwierdzenie b jest fałszywe'}</div>
        </div>
    );
};
