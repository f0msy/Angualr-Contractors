import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ContractorsService } from '../services/contractors.service';
import { FieldValue } from '../entities/field-value.interface';

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
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getFields()   
  }

  getFields(): void {    
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.contractorsService.contractorValues(id).subscribe(val => this.fields = val)
  }

}
