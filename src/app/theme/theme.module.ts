import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NbSecurityModule } from '@nebular/security';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  NavbarComponent,
  LeftSidebarComponent,
  LeftSidebarMenuComponent,
  FooterComponent
} from './components';

import {
  OneColumnLayoutComponent
} from './layouts';

const COMPONENTS = [
  NavbarComponent,
  LeftSidebarComponent,
  LeftSidebarMenuComponent,
  FooterComponent,
  OneColumnLayoutComponent
];

//const NB_MODULES = [
//  NbSecurityModule,
//  NbEvaIconsModule,
//];



const MODULES = [
];
@NgModule({
  imports: [CommonModule, FontAwesomeModule, NgbModule],
  exports: [CommonModule, ...COMPONENTS, MODULES],
  declarations: [...COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})

export class ThemeModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}