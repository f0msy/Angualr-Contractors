import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldValue } from '../entities/field-value.interface';
import { FieldsService } from '../services/fields.service';
import { AngularFireObject } from "@angular/fire/database"
import { Field } from '../entities/field.interface'
import { Contractor } from '../entities/contractor.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  contractor!: Contractor
  
  constructor(
    private route: ActivatedRoute,
    private fieldsService: FieldsService
  ) {}

  ngOnInit(): void {
    this.getFields()
  }

  getFields(): void {    
    const id = this.route.snapshot.paramMap.get('id')!;
    let buffer: Contractor
    this.fieldsService.getValue(id).query.once("value", function(s) {
      buffer = {
        id: s.key!.toString(),
        fields: s.val().fields
      } 
    })

    this.fieldsService.getValue(id).valueChanges().subscribe(v => {  
      this.contractor = buffer
    })
  }
  

  submit() {
    this.fieldsService.updateValue(this.contractor.id.toString(), this.contractor)
  }
}
