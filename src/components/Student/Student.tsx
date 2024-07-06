import { StudentType } from '../../types/types';
import styles from './Student.module.css';

type StudentProps = {
  student: StudentType,
}

function Student({ student }: StudentProps): JSX.Element {
  return (
    <tr className={styles.row} key={student.id}>
      <td className={styles.row_item}>ajnj</td>
      <td className={styles.row_item}>{student.name}</td>
      <td className={styles.row_item}>{student.specialty}</td>
      <td className={styles.row_item}>{student.group}</td>
      <td className={styles.row_item}>{student.birthday}</td>
      <td className={styles.row_item}>{student.rating}</td>
      <td className={styles.row_item}>{student.color}</td>
      <td className={styles.row_item}>мусорка</td>
    </tr>
  );
};

export default Student;
