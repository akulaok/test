import { useState } from 'react';

function UseSearchStudents(): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [currentQuery, setCurrentQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setCurrentQuery(query);
  }

  return [currentQuery, handleInputChange];
}

export default UseSearchStudents;