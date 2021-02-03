import { Injectable } from '@angular/core';
import { FieldValue } from '../entities/field-value.interface';
import { FieldValues } from '../entities/mock-field-values';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor() { }

  getFieldValues(): Observable<FieldValue[]> {
    return of(FieldValues);
  }

}
