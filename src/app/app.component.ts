import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from './apixu.service';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public weatherSearchForm: FormGroup;
  public WeatherComponent1: WeatherComponent;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });     
    
    this.WeatherComponent1 = new WeatherComponent(apixuService);
  }

  public Submit(formValues: any) {    
    this.WeatherComponent1.sendToAPIXU(formValues);    
  }  
}