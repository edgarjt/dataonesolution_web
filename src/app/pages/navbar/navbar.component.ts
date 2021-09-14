import { Component, OnInit } from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  color = 'white';
  scrollBG = 'bg-transparent';

  constructor() { }

  ngOnInit(): void {
  }


  scroll(e: any){
    let scrollOffset = e.target.scrollingElement.scrollTop;

    if (scrollOffset >= 100) {
      this.scrollBG = 'transition';
      this.color = 'black';

    }else {
      this.scrollBG = 'bg-transparent';
      this.color = 'white';
    }
  }

}
