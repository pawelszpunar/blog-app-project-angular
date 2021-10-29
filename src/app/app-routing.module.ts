import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostSingleComponent } from './components/post-single/post-single.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostAllpostsComponent } from './components/post-allposts/post-allposts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuard } from './services/auth-guard.service';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { ProfileComponent } from './components/profile/profile.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';

const routes: Routes = [
  { path: 'post/:uuid', component: PostSingleComponent },
  { path: '', component: PostListComponent },
  { path: 'blog', component: PostAllpostsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  { path: 'admin/addpost', component: PostAddComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/editpost/:uuid', component: PostEditComponent, canActivate: [AuthGuard, AdminAuthGuard] },
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'about', component: AboutComponent },
  { path: 'no-access', component: NoAccessComponent },
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
