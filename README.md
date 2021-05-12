# AngularAppWeather

Get Wheather by city in angular with API Service (openweathermap.org).

### The Process
1. User(city) => AppComponent(City) => Route(WeatherComponent: locationName)
2. WeatherComponent(Service) => HttpClient(OpenWeathermapAPI)
3. WeatherComponent(Observable) => User(view)

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

### AppComponent
1. Dynamic Dropdown by Observable
2. Value Change Check and get value
3. Route to WeaterComponent with locationName

### WeatherComponent
1. Create weather component: cmd>> ng generate component weather
2. Get Weater from service and save in weatherData$
3. weatherData$ is Observable of Htmlshow

### APIXU API
1. create service => cmd>> ng g service apixu
2. Regist openweathermap.org and get appid after 2 hours is ready
3. HttpClient for get from serviec

### Html Data
1. Create html data by weatherData json from service
2. src/app/weather/weather.component.html
3. State = {{this.weatherData.list[0].weather[0].main}}
4. Icon = openweathermap.org/img/w/{{this.weatherData.list[0].weather[0].icon}}.png
5. TempCel = {{this.weatherData.list[0].main.temp-273.18 | number : '1.0-0'}} &#8451;
6. Date = {{this.weatherData.list[0].dt_txt | date: 'mediumDate'}}
