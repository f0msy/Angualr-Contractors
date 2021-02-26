import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CreatorComponent } from './creator/creator.component';
import { GridTableComponent } from './grid-table/grid-table.component'

const routes: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  { path: 'grid', component: GridTableComponent },
  { path: 'card/:id', component: CardComponent},
  { path: 'creator', component: CreatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
