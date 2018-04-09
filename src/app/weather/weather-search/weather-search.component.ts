import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {WeatherService} from '../weather-service';
import {WeatherItem} from '../weather-item';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit{

  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes
  constructor(private _weatherService: WeatherService) {
  }
  ngOnInit() {

    // the long way
    this.myForm = new FormGroup({
      cityName: new FormControl('', [<any>Validators.required, <any>Validators.minLength(1)]),
      });

  }


  onSubmit(model: WeatherItem, isValid: boolean) {
    console.log(model.cityName);
    this.submitted = true; // set form submit to true
    this._weatherService.searchWeatherData(model.cityName)
      .subscribe(
        data => {
          const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
          this._weatherService.addWeatherItem(weatherItem);
        }
      );
  }

}




