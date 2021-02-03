import { Column } from "./column.interface";

export const COLUMNS: Column[] = [
    { id: 1, field: 1, name: 'Наименование', sorted: false },
    { id: 2, field: 2, name: 'Дата создания', sorted: true },
    { id: 3, field: 3,name: 'Номер телефона', sorted: false },
    { id: 4, field: 4, name: 'ИНН', sorted: false }
]