import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { ProjectDockRoutingModule } from './project-dock-routing.module';
import { from } from 'rxjs';
import { SaDashboardComponent } from './sa-dashboard/sa-dashboard.component';
@NgModule({
  declarations: [
    OverviewComponent,
    SaDashboardComponent
  ],
  imports: [
    CommonModule,
    ProjectDockRoutingModule
  ]
})
export class ProjectDockModule { }
