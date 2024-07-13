import { useState } from 'react';
import SortingList from '../../components/Filtration-list/Sorting-list';
import Header from '../../components/Header/Header';
import StudentsList from '../../components/Students-list/Students-list';
import StudentsSearching from '../../components/Students-searching/Students-searching';
import UseSearchStudents from '../../hooks/useSearchStudents';
import useStudents from '../../hooks/useStudents';
import styles from './Students-page.module.css'
import { SortingTypes } from '../../types/types';
function Students(): JSX.Element {
  const [ students , loading, deleteStudent ] = useStudents();
  const[currentQuery, handleInputChange] = UseSearchStudents();
  const [sortingType, setSortingType] = useState<SortingTypes>('Имя А-Я');

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
          <SortingList sortingType={sortingType} onChangeSortingType={(type) => setSortingType(type as SortingTypes)}></SortingList>
        </section>
        <StudentsList onDelete={deleteStudent} students={students} sortingType={sortingType} currentQuery={currentQuery}></StudentsList>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
export default Students;
