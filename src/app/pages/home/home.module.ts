import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CashoutsComponent } from './cashouts/cashouts.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ScholarsComponent } from './scholars/scholars.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    DashboardComponent,
    CalendarComponent,
    CashoutsComponent,
    FeedbackComponent,
    ScholarsComponent,
  ]
})
export class HomePageModule {}
