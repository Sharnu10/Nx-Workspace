import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BaseFormlyComponent } from '../base-formly/base-formly.component';

@Component({
  selector: 'my-org-ngx-formly',
  templateUrl: './ngx-formly.component.html',
  styleUrls: ['./ngx-formly.component.scss'],
})
export class NgxFormlyComponent
  extends BaseFormlyComponent<any>  {
  model1 = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'inputField',
      type: 'input',
      templateOptions: {
        label: 'Input address',
        placeholder: 'Input address',
        required: true
      }
    }
  ];

  fieldForm1: FormlyFieldConfig[] = [
    {
      key: 'panelEmailField',
      wrappers: ['panel'],
      className: 'flex-9',
      templateOptions: { label: 'Email section', title: 'title' },
      fieldGroup: [
        {
          key: 'emailField',
          type: 'input',
          templateOptions: {
            placeholder: 'Enter email',
            required: true
          }
        }
      ]
    },
    {
      key: 'date',
      wrappers: ['panel'],
      className: 'flex-3',
      templateOptions: { label: 'section' },
      fieldGroup: [
        {
          key: 'Datepicker',
          type: 'datepicker',
          templateOptions: {
            label: 'Datepicker',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
          },
        },
      ]
    }
  ];

  constructor() {
    super()
  }

  onSubmit(model: any) {
    console.table(model);
    this.form ?.reset();
    this.model = {};
  }
}
