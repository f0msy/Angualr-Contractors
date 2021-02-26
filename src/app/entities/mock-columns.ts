import { Column } from "./column.interface";
import { Types } from "./types";

export const COLUMNS: Column[] = [
    { id: 1, field: { id: 1, name: 'Наименование', type: Types.text }, sorted: false },
    { id: 2, field: { id: 2, name: 'Дата создания', type: Types.date }, sorted: true },
    { id: 3, field: { id: 3, name: 'Номер телефона', type: Types.text }, sorted: false },
    { id: 4, field: { id: 4, name: 'ИНН', type: Types.number }, sorted: false }
]