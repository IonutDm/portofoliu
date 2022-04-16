import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showText1: boolean = false;
  showText2: boolean = false;
  showText3: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleTitleText1():void {
    this.showText1=!this.showText1
  }
  toggleTitleText2():void {
    this.showText2=!this.showText2
  }
  toggleTitleText3():void {
    this.showText3=!this.showText3
  }
  
}
