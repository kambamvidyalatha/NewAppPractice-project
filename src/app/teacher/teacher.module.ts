import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { teacherroutes } from './teacher.routes' 
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(teacherroutes)
  ],
  declarations: [AddteacherComponent, TeacherlistComponent, TeacherdetailsComponent]
})
export class TeacherModule { }
