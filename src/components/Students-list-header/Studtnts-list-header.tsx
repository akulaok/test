import styles from './Studtnts-list-header.module.css';

function StudentsListHeader(): JSX.Element {
  return (
    <thead className={styles.head}>
      <tr>
        <th></th>
        <th className={styles.column}>
          <span className={styles.column_name}>ФИО</span>
        </th>
        <th className={styles.column}>
          <span className={styles.column_name}>Специальность</span>
        </th>
        <th className={styles.column}>
          <span className={styles.column_name}>Группа</span>
        </th>
        <th className={styles.column}>
          <span className={styles.column_name}>Возраст</span>
        </th>
        <th className={styles.column}>
          <span className={styles.column_name}>Рейтинг</span>
        </th>
        <th></th>
        <th></th>
      </tr>
    </thead>
  );
}

export default StudentsListHeader;
