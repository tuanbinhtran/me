import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  apps = [
    {
      name: '🚀'
    },
    {
      name: '🎉'
    },
    {
      name: '🌴'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.apps);
  }

}
