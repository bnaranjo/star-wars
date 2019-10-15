import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private page_title: string;

  constructor() { 
    this.page_title = 'Login';
  }

  ngOnInit() {
  }

}
