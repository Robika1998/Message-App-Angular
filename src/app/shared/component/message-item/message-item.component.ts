import { Component, Input } from '@angular/core';
import { IMessage } from '../../../core/models/common.model';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from '../../pipes/data-ago.pipe';

@Component({
  selector: 'app-message-item',
  standalone: true,
  imports: [DateAgoPipe, CommonModule],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.scss'
})
export class MessageItemComponent {
  @Input() data!: IMessage;
}
