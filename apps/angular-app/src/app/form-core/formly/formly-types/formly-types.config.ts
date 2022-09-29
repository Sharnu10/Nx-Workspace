import { FieldTypes } from './field-types';
import InputFieldComponent from './input-field/input-field.component';

export const FormlyTypesConfig = [
  {
    name: FieldTypes.InputText,
    component: InputFieldComponent,
    wrappers: ['panel'],
  },
];
