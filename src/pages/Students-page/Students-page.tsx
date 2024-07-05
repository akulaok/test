import Header from '../../components/Header/Header';
import StudentsList from '../../components/Students-list/Students-list';
import StudentsSearching from '../../components/Students-searching/Students-searching';
import styles from './Students-page.module.css'
import {students} from '../../mocks'
function Students(): JSX.Element {
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
        <StudentsList students={students}></StudentsList>
        </section>
      </main>
    </div>
  );
}
export default Students;
