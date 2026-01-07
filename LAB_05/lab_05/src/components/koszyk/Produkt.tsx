import './Product.css';

interface ProduktProps {
    nazwa: string;
}

export const Produkt = ({ nazwa }: ProduktProps) => {
    return (
        <div className="product">
            Produkt: {nazwa}
        </div>
    );
};
