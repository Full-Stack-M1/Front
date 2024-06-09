import { Component, inject } from '@angular/core';
import { Conversation, ConversationTag, ConversationType } from '../../models/conversation/conversation.model';
import { ConversationsCardComponent } from '../../components/conversations-card/conversations-card.component';
import { ConvRequestService } from '../../services/convRequest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Response } from '../../models/response/response.model';

@Component({
  selector: 'app-conversations-page',
  standalone: true,
  imports: [ConversationsCardComponent],
  templateUrl: './conversations-page.component.html',
  styleUrl: './conversations-page.component.scss'
})
export default class ConversationsPageComponent {
  private convRequest: ConvRequestService = inject(ConvRequestService);
  // public conversations: Conversation[] = [
  //   {
  //     id: 1,
  //     name: 'Blocbuster',
  //     messages: [],
  //     createdAt: '2021-10-01T12:00:00',
  //     createdBy: {
  //       id: 1
  //     },
  //     tag: ConversationTag.NEW,
  //     type: [ConversationType.BLOC]
  //   },
  //   {
  //     id: 2,
  //     name: 'Fontainebleau',
  //     messages: [],
  //     createdAt: '2021-10-01T12:00:00',
  //     createdBy: {
  //       id: 1
  //     },
  //     tag: ConversationTag.NEW,
  //     type: [ConversationType.FONTAINEBLEAU]
  //   },
  //   {
  //     id: 3,
  //     name: 'Céüse',
  //     messages: [],
  //     createdAt: '2021-10-01T12:00:00',
  //     createdBy: {
  //       id: 1
  //     },
  //     tag: ConversationTag.NEW,
  //     type: [ConversationType.CEUSE]
  //   },
  //   {
  //     id: 4,
  //     name: 'Gorge du Verdon',
  //     messages: [],
  //     createdAt: '2021-10-01T12:00:00',
  //     createdBy: {
  //       id: 1
  //     },
  //     tag: ConversationTag.NEW,
  //     type: [ConversationType.GORGEDUVERDON]
  //   },
  //   {
  //     id: 5,
  //     name: 'Saint Léger du Ventoux',
  //     messages: [],
  //     createdAt: '2021-10-01T12:00:00',
  //     createdBy: {
  //       id: 1
  //     },
  //     tag: ConversationTag.NEW,
  //     type: [ConversationType.SAINTLEGERDUVENTOUX]
  //   },
  //   {
  //     id: 6,
  //     name: 'Les Dentelles de Montmirail',
  //     messages: [],
  //     createdAt: '2021-10-01T12:00:00',
  //     createdBy: {
  //       id: 1
  //     },
  //     tag: ConversationTag.NEW,
  //     type: [ConversationType.LESDENTELLESDEMONTMIRAIL]
  //   },
  //   {
  //     id: 7,
  //     name: 'Orpierre',
  //     messages: [],
  //     createdAt: '2021-10-01T12:00:00',
  //     createdBy: {
  //       id: 1
  //     },
  //     tag: ConversationTag.NEW,
  //     type: [ConversationType.ORPIERRE]
  //   },
  //   {
  //     id: 8,
  //     name: 'Ailefroide',
  //     messages: [],
  //     createdAt: '2021-10-01T12:00:00',
  //     createdBy: {
  //       id: 1
  //     },
  //     tag: ConversationTag.NEW,
  //     type: [ConversationType.AILEFROIDE]
  //   },
  //   {
  //     id: 9,
  //     name: 'La Turbie',
  //     messages: [],
  //     createdAt: '2021-10-01T12:00:00',
  //     createdBy: {
  //       id: 1
  //     },
  //     tag: ConversationTag.NEW,
  //     type: [ConversationType.LATURBIE],
  //   },
  // ];
  conversations: Conversation[] = [];
  
  ngOnInit() {
    this.convRequest.getAll().subscribe(
      (response: Response) => {
        this.conversations = response.conversations!;
      },
      (error: HttpErrorResponse) => {
        console.error("Error getting conversations", error);
      }
    );
  }
}
