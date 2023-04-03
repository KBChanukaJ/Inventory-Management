import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BillingComponent } from './billing/billing.component';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgxPrintModule } from 'ngx-print';
import { BillingSendComponent } from './billing-send/billing-send.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    BillingComponent,
    BillingSendComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    HttpClientModule,
    FormsModule,
    ScheduleModule, RecurrenceEditorModule, CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
