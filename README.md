# AngularAppWeather

Get Wheather by city in angular with API Service (openweathermap.org).

### The User Scenario
1. User(city) => HttpClient(OpenWeathermapAPI)
2. HttpClient(OpenWeathermapAPI) => Angular(json) => User(view)

### Development Enviroment
1. Visual Studio Code (Client)

## AngularApp (angular-app)
### CreateApp
1. Download and Install Javascript Library: nodejs.org
2. npm install -g @angular/cli
3. ng new NameApp => y,n,enter
4. cd NameApp => code . => ng serve --o

### Packages
1. cmd>> npm install --save jquery popper.js bootstrap
2. angular.json: 
3."styles": [
    "node_modules/bootstrap/dist/css/bootstrap.css",
     "src/styles.css"
],
4."scripts": [
    "node_modules/jquery/dist/jquery.slim.js",
    "node_modules/popper.js/dist/umd/popper.js",
    "node_modules/bootstrap/dist/js/bootstrap.js"
]},

### Weather Component
1. cmd>> ng generate component weather
2. File Create (src/app/routes.ts)
3. import { Routes } from "@angular/router";
4. import { WeatherComponent } from "./weather/weather.component";
5. export const allAppRoutes: Routes = [{ path: '', component: WeatherComponent }];
6. File (src/app/app.module.ts)
7. import {WeatherComponent} from './weather/weather.component';
8. import {RouterModule} from '@angular/router';
9. import {allAppRoutes} from './routes';
10. @NgModule({declarations:[],imports: [BrowserModule,RouterModule.forRoot(allAppRoutes)]
11. File (src/app/app.component.html)
12. <router-outlet></router-outlet>

### Form Wired
1. File (src/app/weather/weather.component.html)
2. File (src/app/app.module.ts)
3. import { ReactiveFormsModule } from '@angular/forms';
4. RouterModule.forRoot(allAppRoutes),ReactiveFormsModule
5. File (src/app/weather/weather.component.ts)
6. import { FormBuilder, FormGroup } from '@angular/forms';
7. public weatherSearchForm: FormGroup;
9. constructor(private formBuilder: FormBuilder) {this.weatherSearchForm = this.formBuilder.group({location: ['']});
10. File (src/app/weather/weather.component.html)
11. <form [formGroup]="weatherSearchForm" (ngSubmit)="sendToAPIXU(weatherSearchForm.value)">
12. formControlName="location"

### APIXU API
1. File (src/app/app.module.ts)
2. import { HttpClientModule } from '@angular/common/http';
3. HttpClientModule
4. cmd>> ng g service apixu
5. File (src/app/app.module.ts)
6. import { ApixuService } from "./apixu.service";
7. @NgModule({providers: [ApixuService]
8. File (src/app/apixu.service.ts)
9. import { HttpClient } from '@angular/common/http';
10. Regist openweathermap.org and get appid after 2 hours is ready
11. GetWeater with link api.openweathermap.org/data/2.5/forecast?appid=123456&q= + location
12. File (src/app/weather.component.ts)
13. import { ApixuService } from "../apixu.service";
14. public weatherData: any;
15. private apixuService: ApixuService
16. sendToAPIXU(formValues){this.apixuService.getWeather(formValues.location).subscribe(data => this.weatherData = data);}

### Html Data
1. File (src/app/weather/weather.component.html)
2. State = {{this.weatherData.list[0].weather[0].main}}
3. Icon = openweathermap.org/img/w/{{this.weatherData.list[0].weather[0].icon}}.png
4. TempCel = {{this.weatherData.list[0].main.temp-273.18 | number : '1.0-0'}} &#8451;
5. Date = {{this.weatherData.list[0].dt_txt | date: 'mediumDate'}}
