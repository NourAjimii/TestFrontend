import { Injectable } from '@angular/core';
import {title} from "../models/title";
import baseUrl from "./helpers.service";
import {HttpClient} from "@angular/common/http";
import {course} from "../models/course";

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient) { }
  getAllCourses(){
    return this.http.get<course[]>(`${baseUrl}/course/getAll`);
  }

  postCourse(course:course){
    return this.http.post<course>(`${baseUrl}/course/add`,course);
  }

  updateCourse(id:number,course:course){
    return this.http.put<course>(`${baseUrl}/course/update/${id}`,course);
  }

  deleteCourse(id:number){
    return this.http.delete(`${baseUrl}/course/delete/`+id);
  }

  getCourse(id:number){
    return this.http.get<course>(`${baseUrl}/course/`+id);
  }
}
