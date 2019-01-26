import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SearchComponent } from './pages/search/search.component';
import { MostlyviewedComponent } from './pages/mostlyviewed/mostlyviewed.component';
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'add', component: AddbookComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'search', component: SearchComponent},
  { path: 'viewed', component: MostlyviewedComponent},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddbookComponent,
    RegistrationComponent,
    SearchComponent,
    MostlyviewedComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
