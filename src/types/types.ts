import { Specialty } from "../consts";

export type StudentType = {
    id: number,
    email: string,
    name: string,
    sex: string,
    specialty: keyof typeof Specialty,
    group: string,
    color: string,
    rating: number,
    birthday: string,
    avatar: string,
}

export type StudentsType = StudentType[];

export type SortingTypes = 'Имя А-Я' | 'Имя Я-А' | 'Сначала моложе' | 'Сначала старше' | 'Высокий рейтинг' | 'Низкий рейтинг';
