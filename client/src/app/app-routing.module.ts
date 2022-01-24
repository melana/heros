import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './hero/add-hero/add-hero.component';
import { EditHeroComponent } from './hero/edit-hero/edit-hero.component';
import { HeroComponent } from './hero/hero.component';
import { InfoHeroComponent } from './hero/info-hero/info-hero.component';

const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'add', component: AddHeroComponent},
  {path: 'info/:id', component: InfoHeroComponent},
  {path: 'edit/:id', component: EditHeroComponent},
  {path: '**', component: HeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
