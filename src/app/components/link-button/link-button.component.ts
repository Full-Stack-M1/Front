import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'LinkButton',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss'
})
export class LinkButtonComponent {
  @Input() text = 'button';
  @Input() link = '/';

}
