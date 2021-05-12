import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WeatherComponent } from "./weather/weather.component";
import { RouterModule, Routes } from "@angular/router";
import { allAppRoutes } from "./routes";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: "",
    component: WeatherComponent
  },
  {
    path: ":locationName",
    component: WeatherComponent
  }
];

@NgModule({
  declarations: [AppComponent, WeatherComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  
}