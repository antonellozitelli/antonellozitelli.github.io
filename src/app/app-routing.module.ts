import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ComunicaDaLeaderComponent } from './comunica-da-leader/comunica-da-leader.component';
import {PdfViewerComponent} from './comunica-da-leader/pdf-viewer/pdf-viewer.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comunica-da-leader', component: ComunicaDaLeaderComponent},
  { path: 'anteprima-libro', component: PdfViewerComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
