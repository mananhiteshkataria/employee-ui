import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAllComponent } from './find-all/find-all.component';
import { FindComponent } from './find/find.component';
import { StoreComponent } from './store/store.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'store',component:StoreComponent},
  {path:'update',component:UpdateComponent},
  {path:'findAll',component:FindAllComponent},
  {path:'find',component:FindComponent},
  {path:'',component:FindAllComponent} 
  // usefull for home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
