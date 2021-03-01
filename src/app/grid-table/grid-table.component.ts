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
  contractors!: Contractor[];
  rows: any = [];
  
  constructor(
    private fieldsService: FieldsService
    ) {}

  ngOnInit(): void {
    this.getContractors();
  }


  getContractors(): void {
    let buffer: any = []
    this.fieldsService.getValuesList().query.once("value", function(v) {
      v.forEach(e =>{ 
        let obj = {
          id: e.key,
          fields: e.val().fields
        }
        buffer.push(obj)
      });  
    })
    
     
    this.fieldsService.getValuesList().valueChanges().subscribe(v => {
      this.contractors = buffer;
      this.genRows();
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

  delete(v: string) {
    this.fieldsService.deleteValue(v)   
    window.document.location.reload()
  }
}
