import { Component, Input } from '@angular/core';
import { Message } from '../../models/message/message.model';

@Component({
  selector: 'app-message-card',
  standalone: true,
  imports: [],
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.scss'
})
export class MessageCardComponent {
  @Input() message!: Message;
}
