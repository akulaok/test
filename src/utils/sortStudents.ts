import { SortingTypes, StudentsType } from '../types/types';
import calculatePreciseAge from './calculateAge';

export const sortStudents = (studentsToSort: StudentsType, type: SortingTypes) => {
  switch (type) {
    case 'Сначала моложе':
      return [...studentsToSort].sort((a, b) => calculatePreciseAge(a.birthday) - calculatePreciseAge(b.birthday));
    case 'Сначала старше':
      return [...studentsToSort].sort((a, b) => calculatePreciseAge(b.birthday) - calculatePreciseAge(a.birthday));
    case 'Низкий рейтинг':
      return [...studentsToSort].sort((a, b) => b.rating - a.rating);
    case 'Высокий рейтинг':
      return [...studentsToSort].sort((a, b) => a.rating - b.rating);
    case 'Имя А-Я':
      return [...studentsToSort].sort((a, b) => a.name > b.name ? 1 : -1);
    case 'Имя Я-А':
      return [...studentsToSort].sort((a, b) => a.name > b.name ? -1 : 1);
    default:
      return studentsToSort;
  }
};