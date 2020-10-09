import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coachingNavigate(): void{
    window.open('https://youtu.be/xnQTOsaKC5o', '_blank');
  }

  leadershipNavigate(): void {
    window.open('https://www.facebook.com/antonellozitelli', '_blank');
  }

  creativityNavigate(): void {
    window.open('https://youtu.be/lUWnmNzZdck', '_blank');
  }
}
