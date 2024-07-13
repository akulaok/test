import { useState, useEffect } from 'react';
import StudentsApi from '../api/api';
import { StudentsType } from '../types/types';

const useStudents = (): [StudentsType, boolean, (id: number) => void] => {
  const [students, setStudents] = useState<StudentsType>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const api = new StudentsApi();
        const data = await api.GetStudents();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const deleteStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return [students, loading, deleteStudent];
};

export default useStudents;
