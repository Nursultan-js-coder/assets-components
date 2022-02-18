import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.scss'],
})
export class MenuComponent implements OnInit {
  @Input() control:FormControl;
  @Input() multiple:boolean;
  @Input() options:string[]|any;
  @Input() icon:string;
  @Input() size? = "sm"
  showOverlay = false;
  constructor() { }

  ngOnInit(): void {
  }

}
