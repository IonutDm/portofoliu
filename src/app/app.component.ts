import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  top:any;
  left:any;
  expand=false;

  constructor() {}


  @HostListener('document:click', ['$event'])
  onClick() {
     this.expand=true;
     setTimeout(() => {
      this.expand=false;
     }, 500)
 }

@HostListener('document:mousemove', ['$event'])
  onMousemove($event: { pageY: number; pageX: number; }) {
    this.top=($event.pageY - 10)+ "px";
    this.left= ($event.pageX - 10)+ "px";
 }


}
