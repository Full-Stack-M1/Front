import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Conversation } from '../../models/conversation/conversation.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-conversations-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './conversations-card.component.html',
  styleUrl: './conversations-card.component.scss'
})
export class ConversationsCardComponent {
  @Input() public conversation!: Conversation;

  ngOnInit() {
    this.conversation.createdAt = new Date(this.conversation.createdAt).toLocaleDateString();
    console.log(this.conversation);
    console.log(this.conversation.messages);
    console.log(this.conversation.createdBy);
  }
}
