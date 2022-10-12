import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PlantillasComponent } from "./pages/plantillas/plantillas.component";
import { PlanesComponent } from "./pages/planes/planes.component";

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'recursos', component:PlantillasComponent},
  {path:'planes', component:PlanesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
