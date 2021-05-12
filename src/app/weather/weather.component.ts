import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApixuService } from "../apixu.service";
import { Observable } from "rxjs";
import { map, filter, concatMap, tap } from 'rxjs/operators';

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})

export class WeatherComponent implements OnInit {
  public weatherData$!: Observable<any>;

  constructor(
    private apixuService: ApixuService,
    private route: ActivatedRoute
  ) {               
  }

  ngOnInit() {
    this.weatherData$ = this.route.params.pipe(
      map(params => params["locationName"]),
      filter(name => !!name),
      concatMap(name => this.apixuService.getWeather(name))
    );
  }
}