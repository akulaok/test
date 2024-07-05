import Header from '../../components/Header/Header';
import StudentsSearching from '../../components/Students-searching/Students-searching';
import styles from './Students-page.module.css'
function Students(): JSX.Element {
  return (
    <div className={styles.page}>
      <Header></Header>
      <main className={styles.main}>
        <section>
          <h1>Студенты</h1>
        </section>
        <section>
          <StudentsSearching></StudentsSearching>
          <div>фильтрация</div>
        </section>
      </main>
    </div>
  );
}
export default Students;
