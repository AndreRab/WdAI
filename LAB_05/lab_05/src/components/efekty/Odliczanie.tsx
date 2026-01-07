import { useState, useEffect } from 'react';
import './Odliczanie.css';

export const Odliczanie = () => {
    const [czas, setCzas] = useState(15.0);
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (isRunning && czas > 0) {
            interval = setInterval(() => {
                setCzas((prevCzas) => {
                    if (prevCzas <= 0.1) {
                        setIsRunning(false);
                        setIsFinished(true);
                        return 0;
                    }
                    return prevCzas - 0.1;
                });
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isRunning, czas]);

    const handleStartStop = () => {
        setIsRunning((prev) => !prev);
    };

    const getButtonLabel = () => {
        if (isFinished) return 'Odliczanie zakończone';
        return isRunning ? 'STOP' : 'START';
    };

    return (
        <div className="odliczanie-container">
            <h2>Odliczanie (Zadanie 6.3)</h2>
            <div className="czas-display">
                {czas.toFixed(1)} sek
            </div>
            <button
                onClick={handleStartStop}
                disabled={isFinished}
            >
                {getButtonLabel()}
            </button>
        </div>
    );
};
