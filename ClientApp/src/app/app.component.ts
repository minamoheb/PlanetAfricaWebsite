import { Component, OnInit ,OnDestroy,} from '@angular/core';
import { TranslateService,LangChangeEvent  } from '@ngx-translate/core';  

import { Router,NavigationStart,NavigationEnd,ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  
  constructor( 
    public translate: TranslateService,
) 
    { 

    }
ngOnInit(){
}
ngOnDestroy() {
}





}  
 
