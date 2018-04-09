import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {WeatherItemComponent} from './weather/weather-item/weather-item.component';
import {WeatherListComponent} from './weather/weather-list/weather-list.component';
import {WEATHER_ITEMS} from './weather/weather.data';
import {WeatherItem} from './weather/weather-item';
import {WeatherSearchComponent} from './weather/weather-search/weather-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {WeatherService} from './weather/weather-service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent, ]
})
export class AppModule {
}
