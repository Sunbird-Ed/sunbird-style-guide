import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { SaDashboardComponent } from './sa-dashboard/sa-dashboard.component';

const routes: Routes = [
  {path: '', component: OverviewComponent},
  { path: 'overview', component: OverviewComponent },
  { path: 'sa-dashboard', component: SaDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDockRoutingModule {}
