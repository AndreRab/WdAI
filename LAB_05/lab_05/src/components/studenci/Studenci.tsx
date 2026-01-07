import './Studenci.css';

interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
}

export const Studenci = () => {
    const Students: Student[] = [
        { imie: 'Jan', nazwisko: 'Kowalski', rocznik: 1999 },
        { imie: 'Anna', nazwisko: 'Nowak', rocznik: 2000 },
        { imie: 'Piotr', nazwisko: 'Wiśniewski', rocznik: 1998 }
    ];

    return (
        <div className="studenci-container">
            <h2>Studenci (Zadanie 5.1)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Rocznik</th>
                    </tr>
                </thead>
                <tbody>
                    {Students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.imie}</td>
                            <td>{student.nazwisko}</td>
                            <td>{student.rocznik}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
