import { FieldValue } from './field-value.interface'

export interface Contractor {
    id: number | string;
    fields: FieldValue[];
}