import { Component, Input } from '@angular/core';

@Component({
  selector: 'Button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text = 'button';
  handleClick = () => {
    console.log('button clicked');
  }

}
