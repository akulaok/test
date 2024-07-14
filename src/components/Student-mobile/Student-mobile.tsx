import { StudentType } from '../../types/types';
import styles from '../Student/Student.module.css';
import calculatePreciseAge from '../../utils/calculateAge';
import ageFormatter from '../../utils/ageFormatter';
import { Specialty } from '../../consts';

type StudentMobileProps = {
  student: StudentType;
  onDelete: (id: number) => void;
};

function StudentMobile({ student, onDelete }: StudentMobileProps): JSX.Element {
  return (
    <td className={styles.row_item_mobile}>
      <div className={styles.header}>
        <div className={styles.header_wrapper}>
          <div className={styles.avatar_wrapper}>
            <img src={student.avatar} className={styles.avatar_img}></img>
          </div>
          <div>
            <span className={styles.name}>{student.name}</span>
            <div className={styles.header_information}>
              <div
                className={[styles.color_mobile, styles[student.color]].join(
                  ' '
                )}
              ></div>
              <div className={styles.star}></div>
              <span className={styles.rating}>{student.rating}</span>
            </div>
          </div>
        </div>
        <button
          className={[styles.ellipse, styles.delete_button].join(' ')}
          onClick={() => onDelete(student.id)}
        ></button>
      </div>
      <div className={styles.information}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            {ageFormatter(calculatePreciseAge(student.birthday))}
          </li>
          <li className={styles.list_item}>{Specialty[student.specialty]}</li>
          <li className={styles.list_item}>{student.group}</li>
        </ul>
      </div>
    </td>
  );
}

export default StudentMobile;
