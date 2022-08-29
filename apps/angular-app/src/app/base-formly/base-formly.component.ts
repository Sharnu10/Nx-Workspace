import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-org-base-formly',
  templateUrl: './base-formly.component.html',
  styleUrls: ['./base-formly.component.scss'],
})
export class BaseFormlyComponent<T>  {

  form: FormGroup = new FormGroup({});
  model = {} as T;
  options: any;
}
