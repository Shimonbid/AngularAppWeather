import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location: any) {
    return this.http.get(
      "http://api.openweathermap.org/data/2.5/forecast?appid=2b01ef6cfc3f62682d9c6946827b4b65&q=" +
        location
    );
  }
}