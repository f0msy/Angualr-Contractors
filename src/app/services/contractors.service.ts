import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contractor } from '../entities/contractor.interface';
import { FieldValue } from '../entities/field-value.interface';
import { CONTRACTORS } from '../entities/mock-contractors';
import { FieldValues } from '../entities/mock-field-values'
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ContractorsService {  

  constructor(private utils: UtilsService) {
    CONTRACTORS.forEach(value => {     
      this.utils.sendData(`contractors/${value.id}`, value)
    })
   }

  getContractors(): Observable<Contractor[]> {
    return of(CONTRACTORS);
  }

  contractorValues(id: number): Observable<FieldValue[]> {
    return of(FieldValues.filter(val => val.contractor === id))
  }
}
