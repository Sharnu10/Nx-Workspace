import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,
  NgxsModule.forRoot([],{
    developmentMode: !environment.production
  }),
  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
