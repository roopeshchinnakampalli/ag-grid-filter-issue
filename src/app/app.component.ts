import { Component } from '@angular/core';
import 'ag-grid-enterprise';
import { HttpClient } from '@angular/common/http';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowModelType;
  private rowSelection;
  private cacheBlockSize;
  private isServerSideGroup;
  private getServerSideGroupKey;
  private sideBar;
  private rowData;
  private rowHeight;
  private localeText;
  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: 'Default',
        field: 'animal',
        filter: 'agSetColumnFilter',
      },
      {
        headerName: 'Excel (Windows)',
        field: 'animal',
        filter: 'agSetColumnFilter',
        filterParams: { excelMode: 'windows' },
      },
      {
        headerName: 'Excel (Mac)',
        field: 'animal',
        filter: 'agSetColumnFilter',
        filterParams: { excelMode: 'mac' },
      },
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 200,
      resizable: true,
    };
    this.sideBar = ['filters'];
    this.rowData = this.getRowData();
    this.localeText = {
      applyFilter: 'OK',
      cancelFilter: 'Cancel',
      resetFilter: 'Clear Filter',
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getRowData() {
    var animals = [
      'Monkey',
      'Lion',
      'Elephant',
      'Tiger',
      'Giraffe',
      'Antelope',
      'Otter',
      'Penguin',
      null,
    ];
    var rows = [];
    for (var i = 0; i < 2000; i++) {
      var index = Math.floor(Math.random() * animals.length);
      rows.push({ animal: animals[index] });
    }
    return rows;
  }
}
