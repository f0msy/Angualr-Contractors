import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldValue } from '../entities/field-value.interface';
import { FieldsService } from '../services/fields.service';
import { AngularFireObject } from "@angular/fire/database"
import { Field } from '../entities/field.interface'
import { Contractor } from '../entities/contractor.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  fields: FieldValue[] = []
  contractor!: Contractor

  constructor(
    private route: ActivatedRoute,
    private fieldsService: FieldsService
  ) {}

  ngOnInit(): void {
    this.getFields()   
  }

  getFields(): void {    
    const id = +this.route.snapshot.paramMap.get('id')!;
    // this.contractorsService.contractorValues(id).subscribe(val => this.fields = val.fields)
    this.fieldsService.getValue(id)
    console.log(this.fieldsService.value);

  }

  submit() {
      console.log(this.fieldsService.getValuesList())
  }

  deleteItems() {
    this.fieldsService.deleteAll()
  }
}
