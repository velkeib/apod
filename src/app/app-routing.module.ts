import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureComponent } from './picture/picture.component';

const routes: Routes = [
  { path: '', component: PictureComponent},
  { path: 'apod', component: PictureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
