import { Component, OnInit } from '@angular/core';
import { EducationService } from '../Service/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

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

  deleteEducation(id) {
    let index = this.educationList.indexOf(id);
    this.educationList.splice(index, 1);
    this.educationService.deleteEducation(id).subscribe(
    res => {
      console.log(res);
    },
    err =>{
      console.log(err);
    });
  }
}
