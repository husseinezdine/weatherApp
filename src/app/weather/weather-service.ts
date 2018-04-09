import {Injectable} from '@angular/core';
import {WEATHER_ITEMS} from './weather.data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {WeatherItem} from './weather-item';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class WeatherService {
  constructor(private _http: HttpClient) {
  }

  addWeatherItem(weatherItem: WeatherItem) {
    WEATHER_ITEMS.push(weatherItem);
  }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  searchWeatherData(cityName: string): Observable<any> {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=dedf6219dfde469035c53c352ccfc197&units=metric')
      .map(res => res)
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json());
      });
  }
}
