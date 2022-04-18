import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent],

  bootstrap: [AppComponent],
})
export class AppModule {}
