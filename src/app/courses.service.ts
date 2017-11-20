import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses(){
    return ["course1 from service with DI!", "course2", 
    "course3", "course4"];
  }
}
