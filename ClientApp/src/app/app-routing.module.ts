import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StoryComponent } from './components/story/story.component';
const routes: Routes = [

  { path: '', component: HomepageComponent },
  { path: 'story', component: StoryComponent },
  // { path: 'Home', component: HomeComponent },

//   {
//     path: 'admin', loadChildren:
//         () => import('./components/administration/administration.module').then(m => m.AdministrationModule)
// },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
