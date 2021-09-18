import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CashoutsComponent } from './cashouts/cashouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { HomePage } from './home.page';
import { ScholarsComponent } from './scholars/scholars.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'scholars',
        component: ScholarsComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'cashouts',
        component: CashoutsComponent
      },
      {
        path: 'feedback',
        component: FeedbackComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
