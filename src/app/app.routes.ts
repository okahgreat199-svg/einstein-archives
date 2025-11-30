import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LandingComponent } from './landing/landing.component';
import { Component } from '@angular/core';
import { TopComponent } from './features/top/top.component';
import { SeeAlsoComponent } from './features/see-also/see-also.component';
import { NotesComponent } from './features/notes/notes.component';
import { ReferencesComponent } from './features/references/references.component';
import { ExternalLinksComponent } from './features/external-links/external-links.component';
import { FurtherReadingComponent } from './features/further-reading/further-reading.component';
import { ImageGalleryComponent } from './features/image-gallery/image-gallery.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: TopComponent },
      { path: 'image-gallery', component: ImageGalleryComponent },
      {
        path: 'life-and-career',
        loadChildren: () =>
          import('./features/life-and-career/life-and-career.module')
            .then(m => m.LifeAndCareerModule)
      },
      {
        path: 'scientific-career',
        loadChildren: () =>
          import('./features/scientific-career/scientific-career.module')
            .then(m => m.ScientificCareerModule)
      },
      {
        path: 'legacy',
        loadChildren: () =>
          import('./features/legacy/legacy.module')
            .then(m => m.LegacyModule)
      },
      {
        path: 'publications',
        loadChildren: () =>
          import('./features/publications/publications.module')
            .then(m => m.PublicationsModule)
      },
      {path: 'see-also', component: SeeAlsoComponent},
      {path: 'notes', component: NotesComponent},
      {path: 'further-reading', component: FurtherReadingComponent},
      {path: 'references', component: ReferencesComponent},
      {path: 'external-links', component: ExternalLinksComponent},
      {path: '**', redirectTo: ''}
    

    ]
  }
];

