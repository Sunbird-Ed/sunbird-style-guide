import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
 Classes = [
   {name : "class 1"},
   {name : "class 2"},  
   {name : "class 3"},
   {name : "class 4"}, 
   {name : "class 5"},   
   {name : "class 6"},  
   {name : "class 7"},
   {name : "class 8"},
   {name : "class 9"},  
   {name : "class 10"},
   {name : "class 11"},
   {name : "class 12"},
   {name : "class 13"},
   {name : "class 14"},  
   {name : "class 15"},
   {name : "class 16"}, 
   {name : "class 17"},   
   {name : "class 18"},  
   {name : "class 19"},
   {name : "class 20"},
   {name : "class 21"},  
   {name : "class 22"},
   {name : "class 23"},
   {name : "class 24"}
 ];
  constructor() { }

  ngOnInit() {
  }

}
