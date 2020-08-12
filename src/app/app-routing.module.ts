import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "./auth/auth.guard";
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: 'inbox', canLoad: [AuthModule], loadChildren: () => import('./inbox/inbox.module').then(mod => mod.InboxModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
