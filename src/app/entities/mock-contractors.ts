import { Contractor } from './contractor.interface'
import { Types } from './types'

export const CONTRACTORS: Contractor[] = [
    {id: 1, fields: [
        { field: { id: 1, name: 'Наименование', type: Types.text }, value: '1Форма'},
        { field: { id: 2, name: 'Дата создания', type: Types.date }, value: '01.02.2021'},
        { field: { id: 3, name: 'Номер телефона', type: Types.text }, value: '+79853338942'},
        { field: { id: 4, name: 'ИНН', type: Types.number }, value: '77778888'},
        { field: { id: 5, name: 'Тип контрагента', type: Types.dropdown }, value: ''}
    ] },
    {id: 2, fields: [
        { field: { id: 1, name: 'Наименование', type: Types.text }, value: 'Спортмастер'},
        { field: { id: 2, name: 'Дата создания', type: Types.date }, value: ''},
        { field: { id: 3, name: 'Номер телефона', type: Types.text }, value: ''},
        { field: { id: 4, name: 'ИНН', type: Types.number }, value: ''},
        { field: { id: 5, name: 'Тип контрагента', type: Types.dropdown }, value: ''}
    ] },
    {id: 3, fields: [
        { field: { id: 1, name: 'Наименование', type: Types.text }, value: 'Вкусвилл'},
        { field: { id: 2, name: 'Дата создания', type: Types.date }, value: ''},
        { field: { id: 3, name: 'Номер телефона', type: Types.text }, value: ''},
        { field: { id: 4, name: 'ИНН', type: Types.number }, value: ''},
        { field: { id: 5, name: 'Тип контрагента', type: Types.dropdown }, value: ''}
    ] }
]