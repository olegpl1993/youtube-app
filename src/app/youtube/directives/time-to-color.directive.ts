import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTimeToColor]',
})
export default class TimeToColorDirective implements OnInit {
  @Input('appTimeToColor') publishedAt!: string | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.publishedAt) {
      const currentDate = new Date();
      const publishedDate = new Date(this.publishedAt);
      const timeDifference = currentDate.getTime() - publishedDate.getTime();
      const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
      if (daysDifference > 180) {
        this.el.nativeElement.style.backgroundColor = 'red';
      } else if (daysDifference >= 30) {
        this.el.nativeElement.style.backgroundColor = 'yellow';
      } else if (daysDifference >= 7) {
        this.el.nativeElement.style.backgroundColor = 'green';
      } else {
        this.el.nativeElement.style.backgroundColor = 'blue';
      }
    }
  }
}
