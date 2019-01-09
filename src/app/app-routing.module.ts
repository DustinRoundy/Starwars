import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {SidenavContainerComponent} from "./sidenav/sidenav-container/sidenav-container.component";
import {CharacterDetailComponent} from "./character/character-detail/character-detail.component";
import {CharacterResolveGuard} from "./character/character-resolve.guard";
import {CanActivateContentGuard} from "./auth/can-activate-content.guard";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";

const routes: Routes = [
  {
    path:'characters',
    component: SidenavContainerComponent,
    canActivate: [CanActivateContentGuard],
    children: [
      {
        path: ':id',
        resolve: { character: CharacterResolveGuard },
        component: CharacterDetailComponent,
      }
    ]
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: '**',
    redirectTo: 'welcome',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
