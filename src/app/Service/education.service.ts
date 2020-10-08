import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  api_server = 'http://localhost:8000';

  constructor(private http: HttpClient) { }


  getAllEducation() {
    return this.http.get<any>(this.api_server+ '/education/');
  }

  deleteEducation(id:String) {
    return this.http.delete<any>(this.api_server+ '/education/'+id);
  }
}
