import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community/dist/lib/entities/colDef';
import { HttpClient } from '@angular/common/http';

export interface ITable {
  make: string,
  model: string,
  price: number
}
@Component({
  selector: 'my-org-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
})
export class AgGridComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];
  rowData: ITable[] = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.initialApi();
  }

  initialApi() {
    this.http.get<ITable[]>('/api').subscribe((data: ITable[]) => {
      this.rowData = data;
    });
  }
}