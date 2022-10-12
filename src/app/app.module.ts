import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeroComponent } from './components/hero/hero.component';
import { SupervisionComponent } from './components/supervision/supervision.component';
import { SquaresComponent } from './components/squares/squares.component';
import { PlanComponent } from './components/plan/plan.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ElAppComponent } from './components/el-app/el-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PlantillasComponent } from './pages/plantillas/plantillas.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PlanesComponent } from './pages/planes/planes.component';
import { PlansComponent } from './components/plans/plans.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    SupervisionComponent,
    SquaresComponent,
    PlanComponent,
    FooterComponent,
    MainComponent,
    ElAppComponent,
    PlantillasComponent,
    PlantillaComponent,
    PlanesComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
