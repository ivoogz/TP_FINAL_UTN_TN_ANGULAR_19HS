import { Routes } from '@angular/router';
import { Courses } from './courses/courses';
import { Form } from './form/form';
import { CourseDetail } from './course-detail/course-detail';
 

export const routes: Routes = [
    {
        path: 'cursos',
        component: Courses,
    },
    {
        path: 'opiniones',
        component: Form,
    },
    {
        path: 'cursos/:course_id',
        component: CourseDetail,
    },
    {
        path: '**',
        component: Courses,
    },
];
