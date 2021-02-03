import { Component, OnInit } from '@angular/core';

import { COLUMNS } from '../entities/mock-columns';
import { FieldValue } from '../entities/field-value.interface';
import { Column } from '../entities/column.interface';
import { Contractor } from '../entities/contractor.interface';

import { ValuesService } from '../services/values.service';
import { ContractorsService } from '../services/contractors.service';


@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss']
})

export class GridTableComponent implements OnInit {
  columns: Column[]  = COLUMNS;
  values: FieldValue[] = [];
  contractors: Contractor[] = [];
  rows: any = [];

  constructor(private valuesService: ValuesService, private contractorsService: ContractorsService) { }

  ngOnInit(): void {
    this.getGridRows();
    this.getContractors();
    this.genRows();
  }

  getGridRows(): void {
    this.valuesService.getFieldValues()
        .subscribe(values => this.values = values);
  }

  getContractors(): void {
    this.contractorsService.getContractors()
        .subscribe(contractors => this.contractors = contractors);
  }

  genRows(): void {
    let fieldIDs: any = [];
    this.columns.map(val => fieldIDs.push(val.field));
    
    this.contractors.map(c => {
      let abc: FieldValue[] = this.values;   
      abc = abc.filter(val => fieldIDs.includes(val.field)).filter(val => val.contractor == c.id);

      let obj: any = {
        contractor: 1,
        fields: []
      }

      obj.contractor = c.id;
      obj.fields = abc;

      this.rows.push(obj);      
    })   
  }
}
