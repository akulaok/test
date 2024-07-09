import { useState } from 'react';
import FiltrationList from '../../components/Filtration-list/Filtration-list';
import Header from '../../components/Header/Header';
import StudentsList from '../../components/Students-list/Students-list';
import StudentsSearching from '../../components/Students-searching/Students-searching';
import UseSearchStudents from '../../hooks/useSearchStudents';
import useStudents from '../../hooks/useStudents';
import styles from './Students-page.module.css'
import { FiltrationTypes } from '../../types/types';
function Students(): JSX.Element {
  const [ students , loading ] = useStudents();
  const[currentQuery, handleInputChange] = UseSearchStudents();
  const [filtrationType, setFiltrationType] = useState<FiltrationTypes>('Имя А-Я');

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <section>
          <h1>Студенты</h1>
        </section>
        <section className={styles.filters}>
          <StudentsSearching handleInputChange={handleInputChange}></StudentsSearching>
          <FiltrationList filtrationType={filtrationType} onChangeFiltrationType={(type) => setFiltrationType(type as FiltrationTypes)}></FiltrationList>
        </section>
        <StudentsList students={students} currentQuery={currentQuery}></StudentsList>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
export default Students;
