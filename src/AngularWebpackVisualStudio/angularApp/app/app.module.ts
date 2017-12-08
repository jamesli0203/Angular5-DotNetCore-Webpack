import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { CalendarModule } from 'primeng/primeng';
 import { OrderListModule } from 'primeng/primeng';


// import { AccordionModule } from 'primeng/components/accordion/accordion';


// import { InputTextModule} from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        SharedModule,
        CoreModule.forRoot(),
        HomeModule,
         CalendarModule,
        // AccordionModule,
         OrderListModule,
        // InputTextModule,
        // DataTableModule,
        // ButtonModule,
        // DialogModule,
        FormsModule,
        BrowserAnimationsModule


    ],
    declarations: [
        AppComponent
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }
