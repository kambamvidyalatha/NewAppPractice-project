import { AddstudentComponent } from "./addstudent/addstudent.component";
import { StudentlistComponent } from "./studentlist/studentlist.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";

export const studentroutrs = [
    {
        path:'student/addstudent',
        component:AddstudentComponent
    },
    {
        path:'student/studentlist',
        component:StudentlistComponent
    },
    {
        path:'student/studentdetails',
        component:StudentdetailsComponent
    }
]