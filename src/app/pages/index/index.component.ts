import {Component, Inject, OnInit} from '@angular/core';
import {Router, RouterState} from "@angular/router";

@Component({
  selector: 'ngx-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  logged = localStorage.getItem('currentUser');

  constructor(private router: Router) {
  }

  ngOnInit() {
    //Removendo Spinner ao Carregar página
    const div = document.getElementById("nb-global-spinner")

    if (div) {
      div.style['display'] = 'none';
    }
  }

  navigate(link: string){
    this.router.navigate([link]);
  }

}
