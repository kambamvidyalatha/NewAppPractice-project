import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { RouterModule } from '@angular/router';
import { studentroutrs } from './student.routes'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(studentroutrs)
    
  ],
  declarations: [AddstudentComponent, StudentlistComponent, StudentdetailsComponent]
})
export class StudentModule { }
