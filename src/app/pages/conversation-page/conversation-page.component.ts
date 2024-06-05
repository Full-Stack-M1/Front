import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Conversation, ConversationFun } from '../../models/conversation/conversation.model';
import { messages } from '../../models/message/message.model';
import { MessageCardComponent } from '../../components/message-card/message-card.component';

@Component({
  selector: 'app-conversation-page',
  standalone: true,
  imports: [MessageCardComponent],
  templateUrl: './conversation-page.component.html',
  styleUrl: './conversation-page.component.scss'
})
export default class ConversationPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  private conversationId: string = this.route.snapshot.paramMap.get('id')!;
  public conversation: ConversationFun = { messages: messages, name: 'Conversation', createdAt: '2021-10-01', createdBy: { id: 1 }};

  ngOnInit() {
    // Call conversation service with paramValue
    // TODO API
    console.log(this.conversationId);
  }
}
