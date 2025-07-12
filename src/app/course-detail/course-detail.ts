import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesInterface, CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-detail',
  imports: [],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail {
  course_id : string = '';
  private courseService = inject(CoursesService);
  courseSelected : CoursesInterface | undefined = undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.course_id = params.get('course_id') || '';
        const course_detail_observable = this.courseService.getCourseById(Number(this.course_id))
        course_detail_observable.subscribe(
          {
            next: (course_detail) => {
              this.courseSelected = course_detail;
            },
            
          }
        )
      }
    )
  }
}
