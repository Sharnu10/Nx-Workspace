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
      templateOptions: { label: 'Email section' },
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
