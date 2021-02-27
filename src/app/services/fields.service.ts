import { Injectable } from '@angular/core';
import { FIELDS } from '../entities/mock-fields'
import { Field } from '../entities/field.interface'
import {AngularFireList, AngularFireObject, AngularFireDatabase} from "@angular/fire/database"
import { Contractor } from '../entities/contractor.interface';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {
  private basePath: string = '/contractorFieldValues';

  values!: AngularFireList<Contractor>
  value!: AngularFireObject<Contractor>
  contractors!: Contractor
  constructor(
    private db: AngularFireDatabase
    ) {
        this.getValuesList()     
    }

  findFieldInfo(id: number): Field {
    return (FIELDS.find(v => v.id === id)!)
  }

  getValuesList(): AngularFireList<Contractor> {
    this.values = this.db.list(this.basePath);
    return this.values
  }

  getValue(key: string): AngularFireObject<Contractor> {      
      this.value = this.db.object(`${this.basePath}/${key}`)
      return this.value
  }

  createValue(value: Contractor): void  {
    this.values.push(value)
      .catch(error => this.handleError(error))
  }


  updateValue(key: string, value: any): void {
    let obj = this.db.database.ref(`${this.basePath}/${key}`)
    this.values.update(obj, value)
      .catch(error => this.handleError(error))
  }

  deleteValue(key: string): void {
    let obj = this.db.database.ref(`${this.basePath}/${key}`)
      this.values.remove(obj)
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


