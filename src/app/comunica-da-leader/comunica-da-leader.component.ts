import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-comunica-da-leader',
  templateUrl: './comunica-da-leader.component.html',
  styleUrls: ['./comunica-da-leader.component.css']
})
export class ComunicaDaLeaderComponent implements OnInit {
  constructor(public cookieService: CookieService) {
  }

  ngOnInit(): void {
  }
}
