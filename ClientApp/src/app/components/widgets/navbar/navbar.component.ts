import { Component, OnInit, Input, ChangeDetectorRef, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

 declare function navbarshrink(): any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor(
) {

 
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    navbarshrink();
   
}

// routerlink(query){
//   this.router.navigate([query[0]])
//   .then(() => {
//     window.location.reload();
//   });
// }






}
