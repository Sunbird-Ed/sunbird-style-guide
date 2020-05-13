import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  IsHidden: boolean = true;
  IsHideMember: boolean = true;
  IsHiddenVerify: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  onSelect(){
    this.IsHidden= !this.IsHidden;
   }
   onSelectVerify(){
     this.IsHiddenVerify = !this.IsHiddenVerify
   }
   onVerify(){
     this.IsHideMember = !this.IsHideMember;
   }
}
