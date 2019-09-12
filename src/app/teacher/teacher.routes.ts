import { AddteacherComponent } from "./addteacher/addteacher.component";
import { TeacherlistComponent } from "./teacherlist/teacherlist.component";
import { TeacherdetailsComponent } from "./teacherdetails/teacherdetails.component";

export const teacherroutes = [
    {
        path:'teacher/addteacher',
        component:AddteacherComponent
    },
    {
        path:'teacher/teacherlist',
        component:TeacherlistComponent
    },
    {
        path:'teacher/teacherdetails',
        component:TeacherdetailsComponent
    }
]