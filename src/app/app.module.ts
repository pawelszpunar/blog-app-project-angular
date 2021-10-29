import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PostListComponent } from './components/post-list/post-list.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostSingleComponent } from './components/post-single/post-single.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostAllpostsComponent } from './components/post-allposts/post-allposts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BackButtonDirective } from './back-button.directive';
import { NavigationService } from './navigation.service';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ColumnLeftComponent } from './components/column-left/column-left.component';
import { ColumnRightComponent } from './components/column-right/column-right.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CutStringPipe } from './cut-string.pipe';
import { PostTemplateComponent } from './components/templates/post-template/post-template.component';
import { AuthGuard } from './services/auth-guard.service';
import { AdminComponent } from './components/admin/admin.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommentsTemplateComponent } from './templates/comments-template/comments-template.component';
import { CommentsShowComponent } from './components/comments-show/comments-show.component';
import { ProfileComponent } from './components/profile/profile.component';
import { JwtService } from './services/jwt.service';
import { JwtModule } from '@auth0/angular-jwt';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CommentsAddComponent } from './components/comments-add/comments-add.component';
import { DefaultImageComponent } from './templates/default-image/default-image.component';
import { AddeditpostformComponent } from './templates/addeditpostform/addeditpostform.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PostListComponent,
    PostSingleComponent,
    PostAddComponent,
    PostAllpostsComponent,
    BackButtonDirective,
    NotfoundComponent,
    LoginComponent,
    ConfirmDialogComponent,
    ColumnLeftComponent,
    ColumnRightComponent,
    FooterComponent,
    RegisterComponent,
    AboutComponent,
    CutStringPipe,
    PostTemplateComponent,
    AdminComponent,
    NoAccessComponent,
    CommentsTemplateComponent,
    CommentsShowComponent,
    ProfileComponent,
    PostEditComponent,
    CommentsAddComponent,
    DefaultImageComponent,
    AddeditpostformComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    AngularMaterialModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSnackBarModule,
    JwtModule,
    ReactiveFormsModule
  ],
  providers: [NavigationService, AuthService, TokenStorageService, AuthGuard, AdminAuthGuard, JwtService, authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
