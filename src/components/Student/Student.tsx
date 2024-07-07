import { StudentType } from '../../types/types';
import calculatePreciseAge from '../../utils/calculateAge';
import styles from './Student.module.css';
type StudentProps = {
  student: StudentType,
}

function Student({ student }: StudentProps): JSX.Element {
  return (
    <tr className={styles.row} key={student.id}>
      <td className={[styles.row_item, styles.avatar].join(' ')}>
        <div className={styles.avatar_wrapper}>
          <img src={student.avatar} className={styles.avatar_img}></img>
        </div>
      </td>
      <td className={[styles.row_item, styles.name].join(' ')}>{student.name}</td>
      <td className={[styles.row_item, styles.specialty].join(' ')}>{student.specialty}</td>
      <td className={styles.row_item}>{student.group}</td>
      <td className={styles.row_item}>{calculatePreciseAge(student.birthday)}</td>
      <td className={styles.row_item}>{student.rating}</td>
      <td className={styles.row_item}>
        <div className={[styles.ellipse, styles[student.color]].join(' ')}></div>
      </td>
      <td className={styles.row_item}>
        <button className={[styles.ellipse, styles.delete_button].join(' ')}></button>
      </td>
    </tr>
  );
};

export default Student;
