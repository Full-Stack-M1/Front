import { Component, inject } from '@angular/core';
import { ConversationCreate, ConversationTag, ConversationType } from '../../models/conversation/conversation.model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ConvRequestService } from '../../services/convRequest.service';
import { Router } from '@angular/router';
import { Response } from '../../models/response/response.model';

@Component({
  selector: 'app-create-conversation',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './create-conversation.component.html',
  styleUrl: './create-conversation.component.scss'
})
export default class CreateConversationComponent {
  private convService: ConvRequestService = inject(ConvRequestService); 
  private router: Router = inject(Router);

  public types = new FormControl('');
  public typeListValue: string[] = Object.values(ConversationType).filter(key => isNaN(Number(key)));
  public typeListKey: string[] = Object.keys(ConversationType).filter(key => isNaN(Number(key)));
  public typeTuple: [string, string][] = this.typeListKey.map((key, index) => [key, this.typeListValue[index]]);

  public tag = new FormControl('');
  public tagList: string[] = Object.keys(ConversationTag).filter(key => isNaN(Number(key)));

  public name = new FormControl('');

  onCreate() {
    const conversation: ConversationCreate = {
      type: this.types.getRawValue() as unknown as ConversationType[],
      tag: this.tag.getRawValue() as unknown as ConversationTag,
      name: this.name.getRawValue() as unknown as string,
    };
    
    this.convService.create(conversation).subscribe(
      (response: Response) => {
        this.router.navigate(['/conversation', response.conversation!._id])
      }
    );

  }
}
