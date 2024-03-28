import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CardComponent } from '../../shared/component/card/card.component';
import { SidibarComponent } from '../../shared/layouts/sidibar/sidibar.component';

@Component({
  selector: 'app-compose',
  standalone: true,
  imports: [CardComponent, SidibarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './compose.component.html',
  styleUrl: './compose.component.scss'
})
export class ComposeComponent {

}
