import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string="Angular";
  constructor(private router: Router){
  }

  Navigate(){
  this.router.navigate(['mytest']);
  }
  checkLogin (loginFormData)
  {
    if(loginFormData.Login =="gaurav" && loginFormData.Password=="1234" )
    {
      //console.log("Authorized");
      this.router.navigate(['employees']);      
    }
  }


}


