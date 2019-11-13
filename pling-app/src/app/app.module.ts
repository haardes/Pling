import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from "./auth.service";
import { EventService } from "./event.service";
import { CalendarComponent } from "./calendar/calendar.component";
import { PlingComponent } from "./pling/pling.component";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  MatIconRegistry,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatTreeModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./token-interceptor.service";
import { Router } from "@angular/router";
import { OverviewComponent } from "./dashboard/overview/overview.component";
import { NotificationsComponent } from "./dashboard/notifications/notifications.component";
import { CreateComponent } from "./events/create/create.component";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { DashboardResolverService } from "./dashboard-resolver.service";
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    CalendarComponent,
    PlingComponent,
    OverviewComponent,
    NotificationsComponent,
    CreateComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule
  ],
  entryComponents: [CreateComponent],
  providers: [
    AuthService,
    EventService,
    AuthGuard,
    DashboardResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private authService: AuthService,
    private router: Router
  ) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl("./assets/mdi.svg")
    );

    if (authService.loggedIn()) {
      router.navigate(["/dashboard"]);
    }
  }
}
