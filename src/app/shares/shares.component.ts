import { Component, Input } from '@angular/core';
import { Share } from './share';

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.css'],
})
export class SharesComponent {
  @Input()
  shares: Share[] = [];
}
