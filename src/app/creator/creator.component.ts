import { Component, OnInit } from '@angular/core';
import { FieldValue } from '../entities/field-value.interface';
import { FieldsService } from '../services/fields.service';
import { Contractor } from '../entities/contractor.interface';
import { FIELDS } from '../entities/mock-fields'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {
  fields: FieldValue[] = []
  contractor!: Contractor

  constructor(
    private fieldsService: FieldsService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFields()  
    this.auth.redirect()
  }
  getFields(): void {    
      FIELDS.forEach(v => {
        let obj: FieldValue = {
          field: {
            id: v.id,
            name: v.name,
            type: v.type
          },
          value: ""
        }
        this.fields.push(obj)
      })
      this.contractor = {
        id: Date.now(),
        fields: this.fields
      }
  }

  submit() {
      this.fieldsService.createValue(this.contractor)
      this.router.navigate(['/grid'])
  }
}
