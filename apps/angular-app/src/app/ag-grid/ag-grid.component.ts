import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community/dist/lib/entities/colDef';

@Component({
  selector: 'my-org-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
})
export class AgGridComponent implements OnInit {

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
];

columnDefs: ColDef[] = [
  { field: 'make' },
  { field: 'model' },
  { field: 'price' }
];

  constructor() {}

  ngOnInit(): void {}
}
