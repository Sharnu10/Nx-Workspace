import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef } from 'ag-grid-community/dist/lib/entities/colDef';

@Component({
  selector: 'my-org-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss'],
})
export class PocComponent {

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
];

columnDefs: ColDef[] = [
  { field: 'make' },
  { field: 'model' },
  { field: 'price' }
];

  form = new FormGroup({});
  model = { email: 'email@mail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true
      }
    }
  ];

  onSubmit(model: any) {
    alert(model)
  }

 



}
