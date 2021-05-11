import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApixuService } from "../apixu.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})

export class WeatherComponent implements OnInit {
  public weatherData: any;
  public $data: Observable<any>;

  constructor(
    private apixuService: ApixuService
  ) {
    this.$data = this.weatherData;
  }

  ngOnInit() {
  }

  sendToAPIXU(formValues: any) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}