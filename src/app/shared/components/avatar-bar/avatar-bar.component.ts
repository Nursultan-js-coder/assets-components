import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-avatar-bar',
  templateUrl: './avatar-bar.component.html',
  styleUrls: ['avatar-bar.component.scss']
})
export class AvatarBarComponent {
  constructor(public route: Router,
  ) {
  }
}
