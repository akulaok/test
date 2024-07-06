import Header from '../../components/Header/Header';
import StudentsList from '../../components/Students-list/Students-list';
import StudentsSearching from '../../components/Students-searching/Students-searching';
import useStudents from '../../hooks/useStudents';
import styles from './Students-page.module.css'
function Students(): JSX.Element {
  const { students, loading } = useStudents();
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
          <StudentsSearching></StudentsSearching>
          <div>фильтрация</div>
        </section>
        <StudentsList students={students}></StudentsList>
      </main>
    </div>
  );
}
export default Students;
