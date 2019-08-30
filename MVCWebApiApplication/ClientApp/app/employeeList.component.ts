import { Component, OnInit } from '@angular/core'
import { Employee } from './Models/Employee'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'

@Component({
   selector : 'emp-list',
   templateUrl : './employeeList.component.html'
})
export class EmployeeListComponent implements OnInit
{
  constructor(private _http:HttpClient)
  {

  }
  apiurl : string ="https://api.coingecko.com/api/v3/coins/list";
  dtOptions : DataTables.Settings = {};
 // employees : Employee[];
  private employees : Observable<Employee[]> = [];

  ngOnInit() : void {
     this.dtOptions = {
       pagingType: 'full_numbers',
        pageLength: 5,
        paging: true,
        scrollY: '300'
     };
     this.getData();    
  }

  private getData() : Observable<Employee[]>
  {
    this.employees = this._http.get(this.apiurl);
  }
}