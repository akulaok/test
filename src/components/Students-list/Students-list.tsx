import { Students } from '../../types/types';
import styles from './Students-list.module.css'

type StudentsListProps = {
    students: Students,
}

function StudentsList({students} : StudentsListProps): JSX.Element {
    console.log(students);
    return (
        <table>
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Специальность</th>
                    <th>Группа</th>
                    <th>Возраст</th>
                    <th>Рейтинг</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.specialty}</td>
                        <td>{student.group}</td>
                        
                        <td>{student.rating}</td>
                        <td>
                            <img src={student.avatar} alt={student.name} className={styles.avatar} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default StudentsList;
