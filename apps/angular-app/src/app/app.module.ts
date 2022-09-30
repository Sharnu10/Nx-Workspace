import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldInput } from '@ngx-formly/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PocComponent } from './poc/poc.component';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { NgxFormlyComponent } from './ngx-formly/ngx-formly.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material-module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    PocComponent,
    AgGridComponent,
    NgxFormlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // FormlyModule.forRoot({
    //   types: [{ name: 'input', component: FormlyFieldInput }],
    // }),
    AgGridModule,
    BrowserAnimationsModule,

    SharedModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
