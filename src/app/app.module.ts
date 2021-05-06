import { NewClassService } from './new-class.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewClassComponent } from './new-class/new-class.component';
import { ViewClassComponent } from './view-class/view-class.component';
import { AppRoutingModule } from './app-routing.module';
import { EditClassComponent } from './edit-class/edit-class.component';
import { EditStudentsComponent } from './edit-students/edit-students.component';

@NgModule({
  declarations: [
    AppComponent,
    NewClassComponent,
    ViewClassComponent,
    EditClassComponent,
    EditStudentsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [NewClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
