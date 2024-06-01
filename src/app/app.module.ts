import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HelpersService } from './helpers.service';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MybackgroundComponent } from './pages/mybackground/mybackground.component';
import { SocialsComponent } from './pages/socials/socials.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { StoreModule } from '@ngrx/store';
import { pageReducer } from './store/page.reducer';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MybackgroundComponent,
    SocialsComponent,
    ProjectsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot({ historyFeature: pageReducer })
  ],
  providers: [HelpersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
