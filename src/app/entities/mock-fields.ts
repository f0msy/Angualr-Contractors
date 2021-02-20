import { Field } from "./field.interface";
import { Types } from './types'

export const FIELDS: Field[] = [
    { id: 1, name: 'Наименование', type: Types.text },
    { id: 2, name: 'Дата создания', type: Types.date },
    { id: 3, name: 'Номер телефона', type: Types.text },
    { id: 4, name: 'ИНН', type: Types.number },
    { id: 5, name: 'Тип контрагента', type: Types.dropdown }
]