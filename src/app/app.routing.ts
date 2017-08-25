import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AdminComponent } from './admin/admin.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
