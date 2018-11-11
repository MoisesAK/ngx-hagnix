/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {Component, ElementRef, OnInit} from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import {Config} from "./@core/data/config";

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    Config.urlBase = this.elementRef.nativeElement.getAttribute('baseUrl')
  }
}
