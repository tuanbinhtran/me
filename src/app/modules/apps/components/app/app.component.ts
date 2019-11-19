import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() name: string;

  isMouseDown = false;

  zIndex = 0;
  position = 'block';

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown($event) {
    this.isMouseDown = true;

    const {x, y} = this.elRef.nativeElement.getBoundingClientRect();

    this.elRef.nativeElement.style.zIndex = 99;
    this.elRef.nativeElement.style.position = 'absolute';

    this.elRef.nativeElement.style.left = x;
    this.elRef.nativeElement.style.top = y;
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp($event) {
    this.isMouseDown = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove($event: MouseEvent) {
    // tslint:disable-next-line: curly
    if (!this.isMouseDown)
      return;

    this.elRef.nativeElement.style.left = $event.pageX - 50 + 'px';
    this.elRef.nativeElement.style.top = $event.pageY - 50 + 'px';



  }

}
