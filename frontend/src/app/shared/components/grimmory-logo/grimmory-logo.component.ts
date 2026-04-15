import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-grimmory-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './grimmory-logo.component.html',
  styleUrl: './grimmory-logo.component.scss'
})
export class GrimmoryLogoComponent {
}
