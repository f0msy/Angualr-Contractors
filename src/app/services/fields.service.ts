import { Injectable } from '@angular/core';
import { FIELDS } from '../entities/mock-fields'
import { Field } from '../entities/field.interface'

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor() { }

  findFieldInfo(id: number): Field {
    return (FIELDS.find(v => v.id === id)!)
  }
}
