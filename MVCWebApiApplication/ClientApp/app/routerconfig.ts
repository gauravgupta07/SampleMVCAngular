import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {MyTestComponent} from './mytest.component';
import {EmployeeListComponent } from './employeeList.component';

export const appRoutes : Routes=[
  { path : '', component : HelloComponent  },
  { path : 'mytest', component : MyTestComponent },
  { path:'employees',component: EmployeeListComponent}
];
