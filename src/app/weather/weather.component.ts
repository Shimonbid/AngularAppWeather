import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApixuService } from "../apixu.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})

export class WeatherComponent implements OnInit {
  public weatherData$!: Observable<any>;
  public locationname!: string;

  constructor(
    private apixuService: ApixuService
  ) {               
    this.locationname = "Tel Aviv";    
  }

  ngOnInit() {    
    this.weatherData$ = this.apixuService.getWeather(this.locationname); 
  }

  public sendToAPIXU(formValues: any) {
    this.locationname = formValues.location;            
  }  
}