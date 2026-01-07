import { Koszyk } from './components/koszyk/Koszyk';
import { NowyKoszyk } from './components/koszyk/NowyKoszyk';
import { Licznik } from './components/liczniki/Licznik';
import { NowyLicznik } from './components/liczniki/NowyLicznik';
import { Formularz } from './components/formularze/Formularz';
import { Haslo } from './components/formularze/Haslo';
import { Logowanie } from './components/formularze/Logowanie';
import { Ternary } from './components/inne/Ternary';
import { Aktualizacja } from './components/inne/Aktualizacja';
import { Studenci } from './components/studenci/Studenci';
import { StudentManager } from './components/studenci/StudentManager';
import { Licznik as LicznikEfekt } from './components/efekty/Licznik';
import { Tytul } from './components/efekty/Tytul';
import { Odliczanie } from './components/efekty/Odliczanie';
import { Komentarze } from './components/produkty/Komentarze';

function App() {
  return (
    <div className="App">
      <h1>Zadania React</h1>

      {/* Zadanie 1.1 */}
      <Koszyk />
      {/* Zadanie 1.2 */}
      <NowyKoszyk />

      {/* Zadanie 2.1 */}
      <Licznik />
      {/* Zadanie 2.2 */}
      <NowyLicznik />

      {/* Zadanie 3.1 */}
      <Formularz />
      {/* Zadanie 3.2 */}
      <Haslo />
      {/* Zadanie 3.3 */}
      <Logowanie />

      {/* Zadanie 4.1 */}
      <Ternary />
      {/* Zadanie 4.2 */}
      <Aktualizacja />

      {/* Zadanie 5.1 */}
      <Studenci />
      {/* Zadanie 5.2 */}
      <StudentManager />

      {/* Zadanie 6.1 */}
      <LicznikEfekt />
      {/* Zadanie 6.2 */}
      <Tytul />
      {/* Zadanie 6.3 */}
      <Odliczanie />

      {/* Zadanie 7.2 (zawiera 7.1) */}
      <Komentarze />
    </div>
  )
}

export default App
