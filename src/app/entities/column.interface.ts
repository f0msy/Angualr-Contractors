import { Field } from "./field.interface";

export interface Column {
    id: number;
    field: Field;
    sorted: boolean;
}