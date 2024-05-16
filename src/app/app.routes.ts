import { Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { CityInfoComponent } from "./city-info/city-info.component";
import { FamousLandmarkComponent } from "./famous-landmark/famous-landmark.component";
import { OtherLandmarksComponent } from "./other-landmarks/other-landmarks.component";
import { LandmarkDetailComponent } from './landmark-detail/landmark-detail.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: CityInfoComponent },
  { path: 'famousLandmark', component: FamousLandmarkComponent },
  { path: 'allLandmark', component: OtherLandmarksComponent },
  { path: 'allLandmark/:name', component: LandmarkDetailComponent },
  { path: '**', redirectTo: '' },
];
