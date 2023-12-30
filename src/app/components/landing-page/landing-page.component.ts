import {Component, OnInit} from '@angular/core';
import {CourseServiceService} from "../../services/course-service.service";
import {course} from "../../models/course";
import {title} from "../../models/title";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit{

  courses : course[] = [];
  titles : title[] = [];
  title !: title;
  course !: course;
  constructor(private courseService: CourseServiceService) {
  }

  goToCourses() {

  }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      data => {
        this.courses = data;
      },
      error => {
        console.error('Error fetching courses:', error);
      }
    );
  }

}
