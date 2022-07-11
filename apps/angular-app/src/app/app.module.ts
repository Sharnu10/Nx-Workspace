import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldInput } from '@ngx-formly/material/input'

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
// import { RouterModule } from '@angular/router';
import { PocComponent } from './poc/poc.component';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, PocComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [{ name: 'input', component: FormlyFieldInput }],
    }),
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
