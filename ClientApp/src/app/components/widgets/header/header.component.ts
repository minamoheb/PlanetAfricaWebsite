import { Component, OnInit, ViewChild} from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { FormBuilder, Validators, FormGroup, FormControl, ValidationErrors } from '@angular/forms';
declare function offcanvasInit(): any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  


  constructor(public translate: TranslateService) {



  }



  ngOnInit() {
  }
  ngAfterViewInit(): void {


  }






}
