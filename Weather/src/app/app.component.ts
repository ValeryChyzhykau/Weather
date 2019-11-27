import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  ngOnInit(){}
  title = "Weather";
  lat: Number;
  lon: Number;
   getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          if (position) {
            console.log(
              "Latitude: " +
                position.coords.latitude +
                "Longitude: " +
                position.coords.longitude
            );
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;
            console.log(this.lat);
            console.log(this.lon);
          }
        },
        (error: PositionError) => console.log(error)
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

    response: any;
  constructor(private http: HttpClient) {}
   Weather() {
    this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=ffce339240c0f0ab8f093aa466e3e8d5`
      )
      .subscribe(response => {
        this.response = response;
        console.log(this.response);
       
      });
  }
  
 


}

//https://api.samples.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=ffce339240c0f0ab8f093aa466e3e8d5
//https://api.weather.yandex.ru/v1/forecast?lat=${this.lat}&lon${this.lon}X-Yandex-API-Key:3281cfff-c8d0-4db1-a821-15582d089011
