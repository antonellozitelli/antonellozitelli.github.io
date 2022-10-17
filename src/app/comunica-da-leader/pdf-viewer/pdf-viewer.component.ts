import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  pdfsrc = { url: 'https://antonellozitelli.it/assets/anteprima-libro.pdf', password: 'KzfSHY7N9E' };

  constructor(public cookieService: CookieService) { }

  ngOnInit(): void {}

}
