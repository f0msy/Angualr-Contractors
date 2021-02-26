import { Injectable } from '@angular/core';
import { FIELDS } from '../entities/mock-fields'
import { Field } from '../entities/field.interface'
import { FieldValue } from '../entities/field-value.interface'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from './database.service';
import {AngularFireList, AngularFireObject, AngularFireDatabase, QueryFn} from "@angular/fire/database"
import { Contractor } from '../entities/contractor.interface';
import { Reference } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {
  private basePath: string = '/contractorFieldValues';

  values!: AngularFireList<Contractor>
  value!: AngularFireObject<Contractor>
  contractors!: Contractor
  constructor(
    private http: HttpClient,
    private database: DatabaseService,
    private db: AngularFireDatabase
    ) {
        this.getValuesList()        
    }

  findFieldInfo(id: number): Field {
    return (FIELDS.find(v => v.id === id)!)
  }

  addFieldValue(value: FieldValue[]): Observable<FieldValue[]> {   
    return this.http.post<FieldValue[]>(`${this.database.url}${this.basePath}.json`, value)
  }

  getValuesList(): AngularFireList<Contractor> {
    this.values = this.db.list(this.basePath);
    return this.values
  }

  getValue(id: any): AngularFireObject<Contractor> {
    let res: any
    this.db.object(this.basePath)
        .query
        .orderByChild("id")
        .equalTo(id)
        .on('value', function(snapshot) {        
          res = snapshot.val() 
        })        
    this.value = res
    return this.value
  }

  createValue(value: Contractor): void  {
    this.values.push(value)
      .catch(error => this.handleError(error))
  }


  updateValue(key: string, value: any): void {
    this.values.update(key, value)
      .catch(error => this.handleError(error))
  }

  deleteValue(key: string): void {
      this.values.remove(key)
        .catch(error => this.handleError(error))
  }

  deleteAll(): void {
      this.values.remove()
        .catch(error => this.handleError(error))
  }

  private handleError(error: any) {
    console.log(error)
  }
}


