import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor() { }

  @Input() valuesFromHome: any;

  ngOnInit() {
  }

  register() {
    console.log('registered!');
  }

  cancel() {
    console.log('register cancelled!');
  }
}
