import { Component, inject } from '@angular/core';
import { CoursesInterface, CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

  course: CoursesInterface[] = []
  loading: boolean = true
  error: string = ''
  private courseService = inject(CoursesService)
 

  ngOnInit() {
    const course_observable = this.courseService.getCourses()
    course_observable.subscribe(
      {
        next: (course) => {
          this.course = course;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error loading courses';
          console.error(error);
          this.loading = false;
        }
      }
    )
  }
}
