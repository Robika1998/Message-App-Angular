import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CardComponent } from '../../component/card/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidibar',
  standalone: true,
  imports: [CardComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sidibar.component.html',
  styleUrl: './sidibar.component.scss'
})
export class SidibarComponent {

}
