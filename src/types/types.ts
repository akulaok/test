export type StudentType = {
    id: number,
    email: string,
    name: string,
    sex: string,
    specialty: string,
    group: string,
    color: string,
    rating: number,
    birthday: string,
    avatar: string,
}

export type StudentsType = StudentType[];

export type FiltrationTypes = 'Имя А-Я' | 'Имя Я-А' | 'Сначала моложе' | 'Сначала старше' | 'Высокий рейтинг' | 'Низкий рейтинг';
