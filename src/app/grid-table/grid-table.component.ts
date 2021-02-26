import { Component, OnInit } from '@angular/core';

import { COLUMNS } from '../entities/mock-columns';
import { FieldValue } from '../entities/field-value.interface';
import { Column } from '../entities/column.interface';
import { Contractor } from '../entities/contractor.interface';

import { FieldsService } from '../services/fields.service';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss']
})

export class GridTableComponent implements OnInit {
  columns: Column[]  = COLUMNS;
  values: FieldValue[] = [];
  contractors!: Contractor[];
  rows: any = [];

  constructor(
    private fieldsService: FieldsService
    ) {}

  ngOnInit(): void {
    this.getContractors();
  }


  getContractors(): void {
    this.fieldsService.getValuesList().valueChanges().subscribe(v => {
      this.contractors = v;
      this.genRows();
      console.log(v);
      
    })   
  }

  genRows(): void {
    let fieldIDs: any = this.columns.map(val => val.field.id);   
    
    this.contractors.map(c => {
      let fields: FieldValue[] = c.fields.filter(val => fieldIDs.includes(val.field.id));
      
      this.rows.push({
        contractor: c.id,
        fields
      }); 
    })   
  }
}
