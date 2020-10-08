import { Component, OnInit } from '@angular/core';
import { EducationService } from '../Service/education.service';

@Component({
  selector: 'app-load-cv',
  templateUrl: './load-cv.component.html',
  styleUrls: ['./load-cv.component.css']
})
export class LoadCvComponent implements OnInit {

  educationList : any;


  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.getAllsEducation();
  }


  getAllsEducation() {
    this.educationService.getAllEducation().subscribe(data => {
      this.educationList = data;
    });
  }

}
