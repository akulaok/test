import { StudentsType } from '../../types/types';
import Student from '../Student/Student';
import StudentsListHeader from '../Students-list-header/Studtnts-list-header';
import styles from './Students-list.module.css'

type StudentsListProps = {
  students: StudentsType,
}

function StudentsList({ students }: StudentsListProps): JSX.Element {
  console.log(students)
  return (
    <table className={styles.list}>
      <StudentsListHeader></StudentsListHeader>
      <tbody className={styles.list_body}>
        {students.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </tbody>
    </table>
  );
};
export default StudentsList;
