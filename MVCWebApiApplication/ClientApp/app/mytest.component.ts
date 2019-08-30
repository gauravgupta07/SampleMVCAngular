import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
 selector: 'my-test',
 templateUrl: './mytest.component.html',
 styleUrls: []
})

export class MyTestComponent {
 constructor(private locaton: Location){
 }
 GoBack(){
   this.locaton.back();
 }

}