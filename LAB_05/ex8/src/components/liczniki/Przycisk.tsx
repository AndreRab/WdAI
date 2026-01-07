import './Przycisk.css';

interface PrzyciskProps {
    onClick: () => void;
}

export const Przycisk = ({ onClick }: PrzyciskProps) => {
    return (
        <button onClick={onClick} className="przycisk">Dodaj</button>
    );
};
