import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import { ComunicaDaLeaderComponent } from './comunica-da-leader/comunica-da-leader.component';
import { FormComponent } from './comunica-da-leader/form/form.component';
import { CookieService } from 'ngx-cookie-service';
import { PdfViewerComponent } from './comunica-da-leader/pdf-viewer/pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    ComunicaDaLeaderComponent,
    FormComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
