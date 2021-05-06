import { EditStudentsComponent } from './edit-students/edit-students.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { ViewClassComponent } from './view-class/view-class.component';
import { NewClassComponent } from './new-class/new-class.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: NewClassComponent },
  { path: 'class/:id', component: EditClassComponent },
  { path: ':classId/:id', component: EditStudentsComponent },
  { path: ':id', component: ViewClassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }