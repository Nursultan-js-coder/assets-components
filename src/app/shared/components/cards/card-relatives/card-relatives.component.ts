import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-relatives',
  template: `
    <mat-card class="card-relative text-dark">
      <mat-card-subtitle>
        <div class="locate-between">
          <p class="main-text m-0">{{relative.degree}}</p>
          <div class="d-flex">
            <button mat-flat-button class="assets-btn-xs ghost-btn-deep-1 icon-only-btn-xs">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-flat-button class="assets-btn-xs ghost-btn icon-only-btn-xs">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
        </div>
      </mat-card-subtitle>
      <mat-card-title>
        <h3
          class="text-lg text-dark font-weight-bold m-0">{{relative.firstName}} {{relative.middleName}} {{relative.lastName}}</h3>
      </mat-card-title>
      <mat-card-content>
        <p>{{relative.dob}}</p>
        <p class="m-0">{{relative.address}}</p>
      </mat-card-content>
      <mat-divider inset></mat-divider>
      <mat-card-actions>
        <div class="d-flex align-items-center ml-2">
          <mat-icon class="icon-lg main-text">phone_in_talk</mat-icon>
          <h3 class="m-0 ml-2 font-weight-bolder">{{relative.phoneNumber}}</h3>
        </div>
        <!--        <button mat-button>LIKE</button>-->
        <!--        <button mat-button>SHARE</button>-->
      </mat-card-actions>
      <mat-card-footer>
        <!--        <mat-progress-bar mode="indeterminate"></mat-progress-bar>-->
      </mat-card-footer>
    </mat-card>
  `,
  styles: [`
    .card-relative {
      max-width: 344px;
      border: 1px solid rgba(235, 235, 235, 1);
      box-shadow: none !important;
      padding-bottom: 4px;

      & > * {
        font-size: 12px;
      }
    }
  `]
})
export class CardRelativesComponent implements OnInit {
  @Input() relative: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
