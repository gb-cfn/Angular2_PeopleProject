import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule}from '@angular/router'
import { AppComponent } from './app.component';
import { GenderPipe } from './gender.pipe';
import { PersonService } from './person.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,RouterModule
  ],
  providers: [ PersonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
