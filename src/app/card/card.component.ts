import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldsService } from '../services/fields.service';
import { Contractor } from '../entities/contractor.interface';
import { FIELDS } from '../entities/mock-fields'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  contractor!: Contractor
  constructor(
    private route: ActivatedRoute,
    private fieldsService: FieldsService,
  ) {}

  ngOnInit(): void {
    this.getFields()
  }

  getCotractor(): Contractor {
    let buffer: Contractor
    const id = this.route.snapshot.paramMap.get('id')!;

    this.fieldsService.getValue(id).query.once("value", function(s) {
      console.log(s.val());

      function addFields (obj: Contractor): Contractor {
        let fieldsArray: number[] = []
        obj.fields.forEach(e => {
          fieldsArray.push(e.field.id)
        })

        FIELDS.forEach(v => {
          if(!fieldsArray.includes(v.id))                
            obj.fields.push(
              {
                field: v,
                value: ""
              }
            )
        })

        return obj 
      }

      buffer = {
        id: s.key!.toString(),
        fields: s.val().fields
      }
      buffer = addFields(buffer)
    })
    return buffer!
  }

  getFields(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    
    this.fieldsService.getValue(id).valueChanges().subscribe(v => {    
      let buffer: Contractor = this.getCotractor()
        this.contractor = buffer
    })  

  }

  submit() {
    this.fieldsService.updateValue(this.contractor.id.toString(), this.contractor)
  }
}

