import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { FrontofficeRoutingModule } from "./frontoffice-routing.module";

// Layout
import { FoLayoutComponent } from "./layout/fo-layout.component";
import { FoNavbarComponent } from "./layout/fo-navbar/fo-navbar.component";
import { FoFooterComponent } from "./layout/fo-footer/fo-footer.component";

// Services
import { PdfGeneratorService } from "./services/pdf-generator.service";
import { FavoriteService } from "./services/favorite.service";
import { ContentService } from "./services/content.service";
import { UserService } from "./services/user.service";
import { AuthService } from "./services/auth.service";
import { AuthInterceptor } from "./interceptors/auth.interceptor";

// Pages
import { HomeComponent } from "./home/home.component";
import { EventsComponent } from "./events/events.component";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";
import { ProjectsMilestonesComponent } from "./projects-milestones/projects-milestones.component";
import { SubscriptionManagementComponent } from "./subscription-management/subscription-management.component";
import { ContentDetailComponent } from "./content-detail/content-detail.component";
import { AssessmentTestComponent } from "./assessment-test/assessment-test.component";
import { RegisterComponent } from "./register/register.component";
import { ContentCardComponent } from "./shared/content-card/content-card.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { ModalComponent } from "./shared/modal/modal.component";
import { ContentListComponent } from "./content-list/content-list.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { NotificationPanelComponent } from "./shared/notification-panel/notification-panel.component";

@NgModule({
  declarations: [
    FoLayoutComponent,
    FoNavbarComponent,
    FoFooterComponent,
    HomeComponent,
    ContentListComponent,
    EventsComponent,
    ProfileSettingsComponent,
    ProjectsMilestonesComponent,
    SubscriptionManagementComponent,
    ContentDetailComponent,
    AssessmentTestComponent,
    RegisterComponent,
    ContentCardComponent,
    LoadingSpinnerComponent,
    ModalComponent,
    FavoritesComponent,
    NotificationPanelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FrontofficeRoutingModule,
  ],
  providers: [
    PdfGeneratorService,
    FavoriteService,
    ContentService,
    UserService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [FoNavbarComponent, FoFooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FrontofficeModule {}
