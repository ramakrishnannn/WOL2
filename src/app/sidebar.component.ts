import { Component, Input } from '@angular/core';


@Component({
  selector: 'side-bar',
   templateUrl: './app.sidebar.html',
    styleUrls: ['./app.sidebar.css'],

})
export class SideBarComponent {
isClassVisible: false;
issubmenu:false;
  
  constructor() {
  }

 
}