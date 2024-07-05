import { useState, useEffect } from 'react';
import StudentsApi from '../api/api';

const useStudents = () => {
  const [students, setStudents] = useState([]);
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

  return { students, loading };
};

export default useStudents;
