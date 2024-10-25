import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoHomePageComponent } from '../modules/todo-home-page/todo-home-page.component';

const routes: Routes = [{ path: 'home', component: TodoHomePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
})
export class AppRoutingModule {}
