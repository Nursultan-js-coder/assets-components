import {Component, Input, OnInit} from '@angular/core';
import {TablePaginator} from "@app/shared/classes/table-paginator";

@Component({
  selector: 'app-table-wrapper',
  template:`
    <div class="table-wrapper">
      <ng-content></ng-content>
    <div class="table__pagination">
      <mat-paginator [length]="tablePaginator.totalCount" [pageSize]="tablePaginator.pageSize" [pageSizeOptions]="tablePaginator.pageSizeOptions"
                     showFirstLastButtons></mat-paginator>
    </div>
    </div>
  `
})
export class TableWrapperComponent implements OnInit {
  @Input() tablePaginator:TablePaginator;
  constructor() { }
  ngOnInit(): void {
  }

}
