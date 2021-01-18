import {Component, OnInit} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  year: number;

  constructor(private media: MediaObserver) {}

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

  coachingNavigate(): void {
    window.open('https://youtu.be/xnQTOsaKC5o', '_blank');
  }

  ghostNavigate(): void {
    window.open('https://youtu.be/Vl2B80qGMis', '_blank');
  }

  creativityNavigate(): void {
    window.open('https://youtu.be/lUWnmNzZdck', '_blank');
  }

  isMobile(): boolean {
    return this.media.isActive('xs');
  }
}
