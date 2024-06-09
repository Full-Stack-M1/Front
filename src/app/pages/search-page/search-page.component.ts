import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ConversationSearch, ConversationTag, ConversationType } from '../../models/conversation/conversation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export default class SearchPageComponent {
  private router: Router = inject(Router);

  public search = new FormControl('');

  public types = new FormControl('');
  public typeListValue: string[] = Object.values(ConversationType).filter(key => isNaN(Number(key)));
  public typeListKey: string[] = Object.keys(ConversationType).filter(key => isNaN(Number(key)));
  public typeTuple: [string, string][] = this.typeListKey.map((key, index) => [key, this.typeListValue[index]]);

  public tags = new FormControl('');
  public tagList: string[] = Object.keys(ConversationTag).filter(key => isNaN(Number(key)));
  
  onSearch() {
    // Convert form values to search params
    const searchParams: ConversationSearch = {
      name: this.search.value as string,
      type: this.types.getRawValue() as unknown as ConversationType[],
      tag: this.tags.getRawValue() as unknown as ConversationTag
    };

    console.log(searchParams);

    this.router.navigate(['/conversations']);
    

    // Call search service with search params
    // TODO API
  }
}
