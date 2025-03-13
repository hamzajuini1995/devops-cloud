import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent], // No change needed here, keep bootstrapping AppComponent
})
export class AppModule {}
