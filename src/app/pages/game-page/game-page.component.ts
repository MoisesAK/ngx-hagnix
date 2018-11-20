import { Component, OnInit } from '@angular/core';
import {link} from "fs";
import {Router} from "@angular/router";


@Component({
  selector: 'ngx-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  logged = localStorage.getItem('currentUser');

  constructor(private router: Router) {
  }

  ngOnInit() {
    const div = document.getElementById("nb-global-spinner");
    if (div) {
      div.style['display'] = 'none';
    }
  }

}
