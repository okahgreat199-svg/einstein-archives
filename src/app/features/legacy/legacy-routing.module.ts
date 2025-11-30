import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardAndHonorsComponent } from './award-and-honors/award-and-honors.component';
import { NonScientificComponent } from './non-scientific/non-scientific.component';
import { ScientificComponent } from './scientific/scientific.component';
import { InPopularCultureComponent } from './in-popular-culture/in-popular-culture.component';

const routes: Routes = [
  { path: '', redirectTo: 'non-scientific', pathMatch: 'full' },
  { path: 'non-scientific', component: NonScientificComponent },
  { path: 'scientific', component: ScientificComponent },
  { path: 'in-popular-culture', component: InPopularCultureComponent },
  { path: 'awards-and-honors', component: AwardAndHonorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegacyRoutingModule { }
