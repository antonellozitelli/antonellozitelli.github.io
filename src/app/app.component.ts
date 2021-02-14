import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cc = window as any;
  popup = {
    palette: {
      popup: {
        background: '#4861AD',
      },
      button: {
        background: '#D95830',
        text: '#ffffff',
      },
    },
    theme: 'edgeless',
    content: {
      message: 'Questo sito utilizza cookies per migliorare l’esperienza di navigazione...',
      dismiss: 'Accetta',
      link: 'Scopri di più',
      href: '/privacy-policy',
    },
  };

  ngOnInit(): void {
    this.cc.cookieconsent.initialise(this.popup);
  }
}
