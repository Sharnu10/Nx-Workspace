import { NgModule } from '@angular/core';
import { FormlyWrappersConfig } from './formly-wrappers/formly-wrappers.config';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyWrappers } from './formly-wrappers';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyTypesConfig } from './formly-types/formly-types.config';
import { FormlyTypes } from './formly-types';

@NgModule({
  imports: [
    FormlyMaterialModule,
    FormlyModule.forRoot({
      wrappers: FormlyWrappersConfig,
      types: FormlyTypesConfig,
    }),
    FormlyMatDatepickerModule,
  ],
  declarations: [...FormlyWrappers, ...FormlyTypes],
  exports: [],
})
export class FormlyCoreModule {}
