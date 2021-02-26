import { Field } from "./field.interface";

export interface FieldValue {
    field: Field;
    value?: any;
    changeDate?: Date;
    changeUser?: number;
}