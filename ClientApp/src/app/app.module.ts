import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/widgets/navbar/navbar.component';
import { HeaderComponent } from './components/widgets/header/header.component';
import { FooterComponent } from './components/widgets/footer/footer.component';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PagesModule } from './components/pages/pages.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StoryComponent } from './components/story/story.component';

// import { AdminNavbarComponent } from './components/widgets/admin-navbar/admin-navbar.component';

export const createtranslateloader=(http:HttpClient)=>{
  return new TranslateHttpLoader(http,'./assets/lang/','.json')
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    StoryComponent
  


    // AdminNavbarComponent
  ],
  imports: [

    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:createtranslateloader,
        deps:[HttpClient]
      }

    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
