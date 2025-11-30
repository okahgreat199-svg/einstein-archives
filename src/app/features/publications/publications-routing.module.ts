import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticalComponent } from './political/political.component';
import { ScientificComponent } from './scientific/scientific.component';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
  {path:'political', component: PoliticalComponent},
  {path: 'scientific', component: ScientificComponent},
  {path: 'popular', component: PopularComponent},
  {path: '', redirectTo: 'scientific', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
