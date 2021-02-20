import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, NgSwitch } from '@angular/common';
import { ContractorsService } from '../services/contractors.service';
import { FieldValue } from '../entities/field-value.interface';
import { FieldsService } from '../services/fields.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  fields: FieldValue[] = []

  constructor(
    private route: ActivatedRoute,
    private contractorsService: ContractorsService,
    private fieldsService: FieldsService
  ) {}

  ngOnInit(): void {
    this.getFields()   
  }

  getFields(): void {    
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.contractorsService.contractorValues(id).subscribe(val => this.fields = val)
  }
  
  getFieldType(id: number): string {
    return this.fieldsService.findFieldInfo(id).type  
  }

  getFieldName(id: number): string {
    return this.fieldsService.findFieldInfo(id).name  
  }

  submit() {
    this.fields.forEach(v => {
      this.fieldsService.addFieldValue(v).subscribe(v => {
        this.getFields()   
      }, err => console.error(err)
      )
    })
  }
}
