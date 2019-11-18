import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { map, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'whatILearned';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.router.events
    //   .pipe(
    //     filter((event) => event instanceof NavigationEnd),
    //     map(() => this.route),
    //     map((route) => {
    //       while (route.firstChild) {
    //         route = route.firstChild;
    //       }
    //       return route;
    //     }),
    //     mergeMap((route) => route.data))
    //   .subscribe((event) => console.log('router events console... ', event));
    console.log(this.router.config);
    
  }
}
