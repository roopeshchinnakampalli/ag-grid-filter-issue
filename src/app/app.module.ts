import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// HttpClient
import { HttpClientModule } from '@angular/common/http';

// ag-grid
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { LicenseManager } from 'ag-grid-enterprise';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     BrowserModule,
    FormsModule, 
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
