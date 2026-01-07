import { useState } from 'react';
import { Dodawanie } from './Dodawanie';
import './Studenci.css';

interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
}

export const StudentManager = () => {
    const [students, setStudents] = useState<Student[]>([
        { imie: 'Jan', nazwisko: 'Kowalski', rocznik: 1999 },
        { imie: 'Anna', nazwisko: 'Nowak', rocznik: 2000 },
        { imie: 'Piotr', nazwisko: 'Wiśniewski', rocznik: 1998 }
    ]);

    const handleAddStudent = (newStudent: Student) => {
        setStudents([...students, newStudent]);
    };

    return (
        <div className="studenci-container">
            <h2>Student Manager (Zadanie 5.2)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Rocznik</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.imie}</td>
                            <td>{student.nazwisko}</td>
                            <td>{student.rocznik}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dodawanie onAdd={handleAddStudent} />
        </div>
    );
};
