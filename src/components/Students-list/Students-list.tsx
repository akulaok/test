import { SortingTypes, StudentType, StudentsType } from "../../types/types";
import { sortStudents } from "../../utils/sortStudents";
import Student from "../Student/Student";
import StudentsListHeader from "../Students-list-header/Studtnts-list-header";
import styles from "./Students-list.module.css";

type StudentsListProps = {
  students: StudentsType;
  currentQuery: string;
  sortingType: SortingTypes;
  onDelete: (id: number) => void;
};

function StudentsList({
  students,
  currentQuery,
  sortingType,
  onDelete,
}: StudentsListProps): JSX.Element {
  return (
    <>
      <table className={styles.list}>
        <StudentsListHeader></StudentsListHeader>
        <tbody className={styles.list_body}>
          {sortStudents(students, sortingType).map((student: StudentType) => {
            if (
              student.name.toLowerCase().startsWith(currentQuery.toLowerCase())
            )
              return (
                <Student
                  onDelete={onDelete}
                  key={student.id}
                  student={student}
                />
              );
          })}
        </tbody>
      </table>
    </>
  );
}
export default StudentsList;
