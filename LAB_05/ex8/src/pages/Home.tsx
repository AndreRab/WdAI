import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="page home">
            <h1>Witaj na blogu!</h1>
            <p>To jest strona startowa.</p>
            <Link to="/blog" className="link-button">Przejdź do bloga</Link>
        </div>
    );
};
