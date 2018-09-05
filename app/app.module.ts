import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {UserService} from './user.service';
import {LoggerService} from './logger.service';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SelectedusersComponent } from './selectedusers/selectedusers.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponentComponent } from './userlogin-component/userlogin-component.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsComponent } from './animations/animations.component';
import { MatButtonModule, MatMenuModule, MatSidenavModule,MatInputModule } from '@angular/material';
import { ApiComponent } from './api/api.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MaterialsComponent } from './materials/materials.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDatePicker} from '@angular/material/datepicker';
const routes: Routes = [
  { 
  path: '', 
  component: UsersComponent
  },
  { 
  path: 'about', 
  component: AboutComponent
  },
  { 
  path: 'contact', 
  component: ContactComponent
  },
  {
   path: 'selectedusers/:id',
   component: SelectedusersComponent
  },
  {
   path: 'login',
   component:LoginComponent
  },
  {
   path:'userlogin-component',
   component: UserloginComponentComponent
  },
  {
   path:'animations',
   component:AnimationsComponent
  },
  {
   path:'api',
   component:ApiComponent
  },
  {
   path:'materials',
   component:MaterialsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SelectedusersComponent,
    LoginComponent,
    UserloginComponentComponent,
    AnimationsComponent,
    ApiComponent,
    MaterialsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule, 
    MatMenuModule, 
    MatSidenavModule,
    MatInputModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    RouterModule.forRoot(routes);
  ],
  providers: [UserService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
