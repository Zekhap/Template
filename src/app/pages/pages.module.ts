import { NgModule } from '@angular/core';

import { ThemeModule } from '../theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {}