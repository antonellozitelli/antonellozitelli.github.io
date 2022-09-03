import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private location: Location) { }

  private loadCookieDeclaration(url: string) {
    const target = document.getElementById("cookie-policy")
    const script = document.createElement('script');
    script.innerHTML = '';
    script.async = true;
    script.id = 'CookieDeclaration'
    script.src = url;
    script.type = 'text/javascript'
    target.after(script);
  }

  ngOnInit(): void {
    this.loadCookieDeclaration("https://consent.cookiebot.com/f8a8cfd2-0b9d-4cf5-b9e6-9fb4aa53441c/cd.js")
  }

  goBack(): void {
    this.location.back();
  }

}
