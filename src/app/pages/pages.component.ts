import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.css'],
  template: `
    <app-one-column-layout>
      <router-outlet></router-outlet>
    </app-one-column-layout>
  `,
})
export class PagesComponent {}