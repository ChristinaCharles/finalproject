import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { AllSongsComponent } from './all-songs/all-songs.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { OneSongComponent } from './one-song/one-song.component';


const routes: Routes = [
  { path: '', component: LoginRegComponent},
  { path: 'songs', component: AllSongsComponent},
  { path: 'users/:id', component: PlaylistComponent},
  { path: 'songs/:id', component: OneSongComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
