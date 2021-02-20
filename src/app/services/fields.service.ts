import { Injectable } from '@angular/core';
import { FIELDS } from '../entities/mock-fields'
import { Field } from '../entities/field.interface'
import { FieldValue } from '../entities/field-value.interface'
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class FieldsService {
  
  constructor(private utils: UtilsService) {
    FIELDS.forEach(v => {     
      this.postFields(v)
    })
   }

  findFieldInfo(id: number): Field {
    return (FIELDS.find(v => v.id === id)!)
  }

  addFieldValue(value: FieldValue): Observable<FieldValue> {   
    return this.utils.sendData(`contractorFieldValues/${value.contractor}`, value)
  }

  postFields(value: Field): Observable<Field> {  
      return this.utils.sendData(`fields/${value.id}`, value)       
  }
}
