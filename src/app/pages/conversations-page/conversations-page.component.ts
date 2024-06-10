import { Component, inject } from '@angular/core';
import { Conversation, ConversationTag, ConversationType } from '../../models/conversation/conversation.model';
import { ConversationsCardComponent } from '../../components/conversations-card/conversations-card.component';
import { ConvRequestService } from '../../services/convRequest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Response } from '../../models/response/response.model';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LinkButtonComponent } from '../../components/link-button/link-button.component';

@Component({
  selector: 'app-conversations-page',
  standalone: true,
  imports: [ConversationsCardComponent,RouterLink ,RouterLinkActive, MatButtonModule, LinkButtonComponent],
  templateUrl: './conversations-page.component.html',
  styleUrl: './conversations-page.component.scss'
})
export default class ConversationsPageComponent {
  private convRequest: ConvRequestService = inject(ConvRequestService);
  conversations: Conversation[] = [];
  private route: ActivatedRoute = inject(ActivatedRoute);
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchParams = {
        name: params['name'],
        type: params['type'],
        tag: params['tag']
      };

      console.log(this.convRequest.getBySearch(searchParams));
      
      this.convRequest.getBySearch(searchParams).subscribe(
        (response: Response) => {
          this.conversations = response.conversations!;
        },
        (error: HttpErrorResponse) => {
          console.error("Error getting conversations", error);
        }
      );
    });
  }
}
