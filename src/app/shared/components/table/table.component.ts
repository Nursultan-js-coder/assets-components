import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {TablePaginator} from "@app/shared/classes/table-paginator";
import {Subscription} from "rxjs";
import {MatSort, Sort} from "@angular/material/sort";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
// import * as XLSX from "xlsx";

type ColumnKeyValuePair = {
  key: string,
  value: string | number,
}

/**
 * @title Basic use of `<employees-table mat-employees-table>`
 */
@Component({
  selector: 'base-table',
  templateUrl: 'table.component.html',
})
export class TableComponent<T> implements OnInit, AfterViewInit, OnChanges {
  @Input() data: any;
  @Input() hasPaginator = true;
  @Output() getSelectedRows = new EventEmitter();
  @ViewChild('TABLE') table: ElementRef;
  params: { variables: any } = {variables: {}};
  @Input() columnKeyValuePair?: ColumnKeyValuePair[]
  keys?: string[];

  selectedRowIndex = -1;


  /**
   * @description Column names for the table
   */
  displayedColumns: string[];
  /**
   * @description Paginator conf class
   */
  tablePaginator = new TablePaginator();
  /**
   * @description Subscription to requests
   */
  subscription: Subscription;
  /**
   * @description enable selection of rows
   */
  @Input() enableCheckbox: boolean = true;
  /**
   * @description Allowing/Dis-allowing multi-selection of rows
   */
  @Input() allowMultiSelect: boolean = true;
  /**
   * @description Data which will be displayed in tabular format
   */
  dataSource = new MatTableDataSource<any>();
  /**
   * @description variable to store selection data
   */
  selection = new SelectionModel<{}>(true);
  /**
   * @description ViewChild to get the MatSort directive from DOM
   */
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  /**
   * @description ViewChild to get the MatPaginator directive from DOM
   */
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @Input() term: FormControl;


  /**
   * for updating table when input changed
   * */
  ngOnChanges(changes: SimpleChanges) {
    if (this.data) {
      this.data = changes.data.currentValue;
      this.getRecords();
    }
  }

  constructor() {
  }

  ngOnInit() {

    if (this.columnKeyValuePair) {
      this.keys = this.columnKeyValuePair.map((column) => column.key);
    }

    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    this.getRecords();

    if (this.term) { // @ts-ignore
      this.term.valueChanges.pipe(distinctUntilChanged(), debounceTime(1000)).subscribe((value) => {
        this.onFilterChange(value);
      })
      // })
    }
    // .subscribe((t: string) => {
    //
    //   console.log("filter changed");
    // })
  }

  ngAfterViewInit() {
    this.selection = new SelectionModel<{}>(this.allowMultiSelect);
    if (this.hasPaginator) {
      this.dataSource.paginator = this.paginator;
      this.paginator.page.subscribe((paginator: PageEvent) => {
        this.tablePaginator.offset = paginator.pageIndex;
        this.tablePaginator.pageSize = paginator.pageSize;
        this.params.variables.take = this.tablePaginator.pageSize;
        this.params.variables.skip = this.tablePaginator.pageSize * this.tablePaginator.offset;
        this.getRecords();
      })
    }

    this.sort.sortChange.subscribe((sort) => {
      if (sort.direction)
        this.sortHandler(sort);
    })

  }

  sortHandler(sort: Sort) {
  }

  getRecords(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
    this.dataSource = new MatTableDataSource<any>(this.data);

  }

  getPaginatedData() {
    return this.data?.slice(this.tablePaginator.pageSize * this.tablePaginator.offset, (this.tablePaginator.pageSize * this.tablePaginator.offset) + this.tablePaginator.pageSize);
  }

  /**
   * @selection
   */
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    this.getSelectedRows.emit(this.selection.selected);

  }

  /** Gets the records for the first page of table. */
  getForFirstPage() {
    this.paginator.pageIndex ? this.paginator.firstPage() : this.getRecords();
  }


  /** Gets the selected rows array on row select. */
  rowSelect() {
    this.getSelectedRows.emit(this.selection.selected);
  }

  ngOnDestroy() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  refresh() {
    this.dataSource = new MatTableDataSource<T>(this.data);
  }

  onFilterChange(term: string) {
  }

  exportAsXLSX() {
    // const fileName = "demo.xlsx";
    // let wb: XLSX.WorkBook;
    // let ws: XLSX.WorkSheet;
    // if (this.selection.selected.length > 0) {
    //   ws = XLSX.utils.json_to_sheet(this.selection.selected);
    //   wb = XLSX.utils.book_new();
    // } else {
    //   ws = XLSX.utils.table_to_sheet(this.table.nativeElement);
    //   wb = XLSX.utils.book_new();
    // }
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    // XLSX.writeFile(wb, fileName);
  }


}
