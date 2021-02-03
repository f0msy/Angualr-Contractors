import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { find } from 'rxjs/operators'
import { Contractor } from '../entities/contractor.interface';
import { FieldValue } from '../entities/field-value.interface';
import { CONTRACTORS } from '../entities/mock-contractors';
import { FieldValues } from '../entities/mock-field-values'

@Injectable({
  providedIn: 'root'
})
export class ContractorsService {  

  constructor() { }

  getContractors(): Observable<Contractor[]> {
    return of(CONTRACTORS);
  }

  contractorValues(id: number): Observable<FieldValue[]> {
    return of(FieldValues.filter(val => val.contractor === id))
  }
}
