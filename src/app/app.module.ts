import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { RentalComponent } from './rental/rental.component';
import { AdminComponent } from './admin/admin.component';
import { DisplayCardComponent } from './rental/display-card/display-card.component';
import { EnquiriesComponent } from './admin/enquiries/enquiries.component';
import { HousesComponent } from './admin/houses/houses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TutorsComponent } from './tutors/tutors.component';
import { ContactComponent } from './contact/contact.component';
import { HometutorComponent } from './admin/hometutor/hometutor.component';
import { SchooltutorComponent } from './admin/schooltutor/schooltutor.component';
import { CoachingtutorComponent } from './admin/coachingtutor/coachingtutor.component';
import { OurtutorsComponent } from './admin/ourtutors/ourtutors.component';
import { DemosComponent } from './admin/demos/demos.component';
import { ContactformComponent } from './admin/contactform/contactform.component';
import { AboutComponent } from './tutors/about/about.component';
import { HomeComponent } from './home/home.component';
import { WorkerenquiryComponent } from './admin/workerenquiry/workerenquiry.component';
import { OurworkersComponent } from './admin/ourworkers/ourworkers.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PoolsenquiryComponent } from './admin/poolsenquiry/poolsenquiry.component';
import { VehicleenquiryComponent } from './admin/vehicleenquiry/vehicleenquiry.component';
import { EventenquiryComponent } from './admin/eventenquiry/eventenquiry.component';
import { ItenquiryComponent } from './admin/itenquiry/itenquiry.component';
import { ContactenquiryComponent } from './admin/contactenquiry/contactenquiry.component';
import { LoaderComponent } from './loader/loader.component';
import { RentenquiriesComponent } from './admin/rentenquiries/rentenquiries.component';
import { AppliedrentalsComponent } from './admin/appliedrentals/appliedrentals.component';
import { LocalityComponent } from './admin/locality/locality.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent,children:[
    { path: 'houses', component: HousesComponent },
    { path: 'appliedrentals', component: AppliedrentalsComponent },
    { path: 'managelocality', component: LocalityComponent },
    { path: 'enquiries', component: EnquiriesComponent },
    { path: 'coachingtutor', component: CoachingtutorComponent },
    { path: 'hometutor', component: HometutorComponent },
    { path: 'schooltutor', component: SchooltutorComponent },
    { path: 'tutor', component: OurtutorsComponent},
    { path: 'demos', component: DemosComponent},
    { path: 'contactform', component: ContactformComponent},
    { path: 'workerenq', component: WorkerenquiryComponent},
    { path: 'workers', component: OurworkersComponent},
    { path: 'pool', component: PoolsenquiryComponent},
    { path: 'vehicle', component: VehicleenquiryComponent},
    { path: 'event', component: EventenquiryComponent},
    { path: 'itenquiry', component: ItenquiryComponent},
    { path: 'contactenquiry', component: ContactenquiryComponent},
    { path: 'rentenquiries', component: RentenquiriesComponent}
  ] },
  { path: '', component: HomeComponent },
  { path: 'houses', component: RentalComponent },
  { path: 'tutors', component: TutorsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RentalComponent,
    AdminComponent,
    DisplayCardComponent,
    EnquiriesComponent,
    HousesComponent,
    NavbarComponent,
    FooterComponent,
    TutorsComponent,
    ContactComponent,
    HometutorComponent,
    SchooltutorComponent,
    CoachingtutorComponent,
    OurtutorsComponent,
    DemosComponent,
    ContactformComponent,
    AboutComponent,
    HomeComponent,
    WorkerenquiryComponent,
    OurworkersComponent,
    PoolsenquiryComponent,
    VehicleenquiryComponent,
    EventenquiryComponent,
    ItenquiryComponent,
    ContactenquiryComponent,
    LoaderComponent,
    RentenquiriesComponent,
    AppliedrentalsComponent,
    LocalityComponent
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
RouterModule.forRoot(routes),
FormsModule,
AngularFireModule.initializeApp(environment.firebase),
AngularFirestoreModule, 
AngularFireAuthModule, 
AngularFireStorageModule,
ScrollToModule.forRoot(),
HttpClientModule,
NgbModule
 
    
  ],
  providers: [],
})
export class AppModule { }
