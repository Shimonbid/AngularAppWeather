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
1. Add bootstrap.css, bootstrap.js, jquery, popper.js
2. cmd>> npm install --save jquery popper.js bootstrap
3. angular.json => "styles" => "node_modules/bootstrap/dist/css/bootstrap.css"
4. angular.json => "scripts" => "node_modules/jquery/dist/jquery.slim.js", "node_modules/popper.js/dist/umd/popper.js", "node_modules/bootstrap/dist/js/bootstrap.js"

### Weather Component
1. Create weather component and routes 
2. create weather => cmd>> ng generate component weather
3. create file => src/app/routes.ts => import { Routes } from "@angular/router"; => import { WeatherComponent } from "./weather/weather.component"; => export const allAppRoutes: Routes = [{ path: '', component: WeatherComponent }];
4. src/app/app.module.ts => import {WeatherComponent} from './weather/weather.component'; => import {RouterModule} from '@angular/router'; => import {allAppRoutes} from './routes'; => RouterModule.forRoot(allAppRoutes)
5. src/app/app.component.html => router-outlet></router-outlet

### Form Wired
1. Create form wired for service
2. src/app/app.module.ts => import { ReactiveFormsModule } from '@angular/forms'; => ReactiveFormsModule
3. src/app/weather/weather.component.ts => import { FormBuilder, FormGroup } from '@angular/forms'; => public weatherSearchForm: FormGroup; => constructor(private formBuilder: FormBuilder) {this.weatherSearchForm = this.formBuilder.group({location: ['']});
4. src/app/weather/weather.component.html => add form => [formGroup]="weatherSearchForm" => (ngSubmit)="sendToAPIXU(weatherSearchForm.value)" => formControlName="location"

### APIXU API
1. Create service with httpclient
2. src/app/app.module.ts => import { HttpClientModule } from '@angular/common/http'; => HttpClientModule
3. create service => cmd>> ng g service apixu
4. src/app/apixu.service.ts => import { HttpClient } from '@angular/common/http'; => Regist openweathermap.org and get appid after 2 hours is ready => Link => getWeather(location: any) {return this.http.get(api.openweathermap.org/data/2.5/forecast?appid=123456&q= + location);
5. src/app/weather.component.ts => import { ApixuService } from "../apixu.service"; => public weatherData: any; => private apixuService: ApixuService => sendToAPIXU(formValues){this.apixuService.getWeather(formValues.location).subscribe(data => this.weatherData = data);}

### Html Data
1. File (src/app/weather/weather.component.html)
2. State = {{this.weatherData.list[0].weather[0].main}}
3. Icon = openweathermap.org/img/w/{{this.weatherData.list[0].weather[0].icon}}.png
4. TempCel = {{this.weatherData.list[0].main.temp-273.18 | number : '1.0-0'}} &#8451;
5. Date = {{this.weatherData.list[0].dt_txt | date: 'mediumDate'}}
