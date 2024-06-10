import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Conversation, ConversationFun, ConversationTag, ConversationType } from '../../models/conversation/conversation.model';
import { messages } from '../../models/message/message.model';
import { MessageCardComponent } from '../../components/message-card/message-card.component';
import { ConvRequestService } from '../../services/convRequest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Response } from '../../models/response/response.model';
import { MessageBarComponent } from '../../components/message-bar/message-bar.component';

@Component({
  selector: 'app-conversation-page',
  standalone: true,
  imports: [MessageCardComponent, MessageBarComponent],
  templateUrl: './conversation-page.component.html',
  styleUrl: './conversation-page.component.scss'
})
export default class ConversationPageComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private convRequest: ConvRequestService = inject(ConvRequestService);

  private conversationId: string = this.route.snapshot.paramMap.get('id')!;
  public conversation?: Conversation;
  public loaded = signal(false);
  // public conversation: ConversationFun = { messages: messages, name: 'Conversation', createdAt: '2021-10-01', createdBy: { _id: 1, username: 'User', email: '', password: ''}};

  ngOnInit() {
    this.reloadMessages();
  }

  reloadMessages() {
    this.convRequest.getOne(this.conversationId).subscribe(
      (response: Response) => {
        this.conversation = response.conversation!;
        this.conversation.createdAt = new Date(this.conversation.createdAt).toLocaleDateString();
        this.loaded.set(true);
      },
      (error: HttpErrorResponse) => {
        console.error("Error getting conversation", error);
      }
    );
  }
}
