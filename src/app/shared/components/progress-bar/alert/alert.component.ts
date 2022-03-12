import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-alert',
  template: `
    <div [class]="'assets-alert '+data.status+'-alert'">
      <ng-container [ngSwitch]="data.status">
        <ng-template ngSwitchCase="success">
          <mat-icon class="prefix icon-lg">check_circle</mat-icon>
        </ng-template>
        <ng-template ngSwitchCase="warn">
          <mat-icon class="prefix icon-lg">warning</mat-icon>
        </ng-template>
        <ng-template ngSwitchCase="danger">
          <mat-icon class="prefix icon-lg">error</mat-icon>
        </ng-template>
      </ng-container>
      <span>{{data.message}}</span>
      <button mat-icon-button class="icon-btn-lg" (click)="_snackBarRef.dismiss()">
        <mat-icon>clear</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    @import "../../../../../styles/abstracts/variables";

    .assets-alert {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: space-between;
      background-color: #fff;
      color: #23313C;
      min-height: 48px;
      padding: 4px 16px;
    }

    .success-alert {
      .prefix {
        color: #399472;
      }
    }

    .warn-alert {
      .prefix {
        color: #a0a005;
      }
    }

    .danger-alert {
      .prefix {
        color: $inactive;

      }
    }

    ::ng-deep .mat-snack-bar-container {
      padding: 0 !important;
      overflow: hidden !important;
    }

  `]
})
export class AlertComponent implements OnInit {

  constructor(public _snackBarRef: MatSnackBarRef<any>, @Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

}
