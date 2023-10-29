import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule, MatButtonModule],
  standalone: true,
})
export default class ButtonComponent {
  @Input() height = '32px';

  @Input() width = '120px';
}
