import { Component } from '@angular/core';

@Component({
  selector: 'app-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <div class="wrapper">
      <app-left-sidebar></app-left-sidebar>
      <div class="content-page">
        <div class="content">
          <app-navbar></app-navbar>
          
          <div class="container-fluid">
            <ng-content select="router-outlet"></ng-content>
          </div>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  `,
})
export class OneColumnLayoutComponent {}