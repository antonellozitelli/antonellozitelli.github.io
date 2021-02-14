import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {copyList} from '../shared/models/copy';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comunica-da-leader',
  templateUrl: './comunica-da-leader.component.html',
  styleUrls: ['./comunica-da-leader.component.css']
})
export class ComunicaDaLeaderComponent implements OnInit {
  copy = copyList[0];

  constructor(private route: ActivatedRoute, public cookieService: CookieService) {
  }

  ngOnInit(): void {
    const param = +this.route.snapshot.queryParamMap.get('copy');
    if (param <= 2) {
      this.copy = copyList[param];
    }
  }
}
