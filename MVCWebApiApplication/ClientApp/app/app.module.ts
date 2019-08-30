import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { appRoutes } from './routerconfig';
import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyTestComponent } from './mytest.component';
import { EmployeeListComponent } from './employeeList.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,
    RouterModule.forRoot(appRoutes), DataTablesModule, HttpClientModule ],

  declarations: [ AppComponent, HelloComponent, MyTestComponent, EmployeeListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
