import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  styles = [
    {id: 1, property: 'font-size', value: '15px'},
    {id: 2, property: 'color', value: 'red'},

];

property = 'color';
value = 'red';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  GoToHome() {
    const link = ['about'];
    this.router.navigate(link);
}

}
