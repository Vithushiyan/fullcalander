import { NgModule } from '@angular/core';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleService } from './schedule.service';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScheduleComponent],
  imports: [ScheduleRoutingModule, FullCalendarModule, FormsModule],
  providers: [ScheduleService]
})
export class ScheduleModule {}
