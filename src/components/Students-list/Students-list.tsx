import { StudentType, StudentsType } from '../../types/types';
import Student from '../Student/Student';
import StudentsListHeader from '../Students-list-header/Studtnts-list-header';
import styles from './Students-list.module.css'

type StudentsListProps = {
  students: StudentsType,
  currentQuery: string,
}

function StudentsList({ students, currentQuery }: StudentsListProps): JSX.Element {

  return (
    <table className={styles.list}>
      <StudentsListHeader></StudentsListHeader>
      <tbody className={styles.list_body}>
        {students.map((student: StudentType) => {
          if (student.name.toLowerCase().startsWith(currentQuery.toLowerCase()))
            return (<Student key={student.id} student={student} />);
        }
        )}
      </tbody>
    </table>
  );
};
export default StudentsList;
