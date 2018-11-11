import {Component, Inject, OnInit} from '@angular/core';
import {NbSpinnerService} from "@nebular/theme";

@Component({
  selector: 'ngx-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Removendo Spinner ao Carregar página
    const div = document.getElementById("nb-global-spinner")

    if (div) {
      div.style['display'] = 'none';
    }
  }

}
