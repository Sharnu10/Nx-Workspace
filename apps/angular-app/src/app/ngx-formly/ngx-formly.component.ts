import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BaseFormlyComponent } from '../base-formly/base-formly.component';

@Component({
  selector: 'my-org-ngx-formly',
  templateUrl: './ngx-formly.component.html',
  styleUrls: ['./ngx-formly.component.scss'],
})
export class NgxFormlyComponent 
  extends BaseFormlyComponent<any> implements OnInit {

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

  constructor() {
    super()
  }

  ngOnInit(): void {
    this.model = { email: 'email@mail.com' };
  }

  onSubmit(model: any) {
    console.table(model);
  }
}
