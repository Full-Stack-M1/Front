import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageRequestService } from '../../services/messageRequest.service';
import { Response } from '../../models/response/response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-bar.component.html',
  styleUrl: './message-bar.component.scss'
})
export class MessageBarComponent {
private messageRequest: MessageRequestService = inject(MessageRequestService);
private router: Router = inject(Router);

  @Input() public conversationId!: string;
  @Output() public reloadEmitter = new EventEmitter<boolean>();
  message: string = '';

  sendMessage() {
    if (this.message.trim()) {
      this.messageRequest.createMessage(this.conversationId, this.message).subscribe(
        (response: Response) => {
          console.log(response);
          this.reloadEmitter.emit(true);
          this.router.navigate(['/conversation/' + this.conversationId]);
        }
      )
      this.message = '';
    }
  }
}