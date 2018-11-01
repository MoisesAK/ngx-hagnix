import {Component, NgModule} from '@angular/core';




@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss',
    '../../ui-features/buttons/hero-buttons/hero-buttons.component.scss'],
  templateUrl: './form-inputs.component.html',
})

@NgModule({
  imports: [
  ],
})
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;
}
