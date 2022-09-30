import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { BaseFormlyComponent } from '../base-formly/base-formly.component';
import { FormCoreModule } from '../form-core/form-core.module';

@NgModule({
  imports: [FormCoreModule, FormlyModule],
  exports: [BaseFormlyComponent, FormlyModule],
  declarations: [BaseFormlyComponent],
})
export class SharedModule {}
