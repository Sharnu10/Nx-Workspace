import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'my-org-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss'],
})
export class PocComponent {
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
