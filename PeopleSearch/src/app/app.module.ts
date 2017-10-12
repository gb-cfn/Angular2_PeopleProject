import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule}from '@angular/router'
import { AppComponent } from './app.component';
import { GenderPipe } from './gender.pipe';
import { PersonService } from './person.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { PeopleProjectRoutingModule} from  './app-routing.module';
import { ShowComponent } from './show/show.component'
@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    SearchComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule, PeopleProjectRoutingModule
  ],
  providers: [ PersonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
