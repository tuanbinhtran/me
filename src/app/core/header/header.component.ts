import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routes = [
    {
      path: '/apps',
      name: '👓 Apps'
    },
    {
      path: '/pipes',
      name: 'Pipes'
    },
    {
      path: '/pipes/string-manipulation',
      name: 'String Manipulation'
    }
  ];


  constructor(public router: Router) { }

  ngOnInit() {
  }


}
