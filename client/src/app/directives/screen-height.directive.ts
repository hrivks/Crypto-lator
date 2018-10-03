import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScreenHeight]'
})
export class ScreenHeightDirective implements OnInit {

  @Input() heightOffset: number;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    if (this.heightOffset === undefined) {
      this.heightOffset = 0;
    }
    this.el.nativeElement.style.height = (window.innerHeight - 105 + this.heightOffset) + 'px';
  }

}
