import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-string-manipulation',
  templateUrl: './string-manipulation.component.html',
  styleUrls: ['./string-manipulation.component.scss']
})
export class StringManipulationComponent implements OnInit {
  code =
`function sayHello() {
  return 'hello';
}`;

  codeLanguage: string;


  constructor() { }

  ngOnInit() {
  }

  onHighlight(e: HighlightResult) {
    this.codeLanguage = e.language;
  }

}
