import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AdminComponent } from './admin/admin.component';
import { ForumComponent } from './forum/forum.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
