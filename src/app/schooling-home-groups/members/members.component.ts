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
  HideAddmember: boolean = true;
  constructor() { }

  ngOnInit() {
  }

   onSelect(){
     this.IsHiddenVerify = !this.IsHiddenVerify;
     this.HideAddmember = !this.HideAddmember;
   }

   onVerify(){
     this.IsHideMember = !this.IsHideMember;
     this.IsHiddenVerify = !this.IsHiddenVerify;
   }
   ExitAddtoGroup(){
    this.IsHideMember = !this.IsHideMember;
    this.HideAddmember = true;
   }
}
