import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface CoursesInterface {
  id : number,
  title : string,
  preDescription : string,
  image : string,
  description : string,
  syllabus : string,
  requirements : string,
  price : number,
  duration : string,
  level : string,
  certificate : boolean
}

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  private coursesURL = '/courses.json';
  constructor(private http : HttpClient) {}

 


  public getCourses() : Observable<CoursesInterface[]> {
		return this.http.get<CoursesInterface[]>(this.coursesURL)
  }

  getCourseById(id: number): Observable<CoursesInterface | undefined> {
    return this.http.get<CoursesInterface[]>(this.coursesURL).pipe(
      map(courses => courses.find(course => course.id === id))
    );
  }
  

}
