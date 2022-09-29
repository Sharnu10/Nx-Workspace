import { Component, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'my-org-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export default class InputFieldComponent {
  @ViewChild(MatInput) formFieldControl!: MatInput;
  to: any;
}
