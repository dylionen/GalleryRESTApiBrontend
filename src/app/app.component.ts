import { Component, OnInit } from '@angular/core';
import { Car } from './car-card/car';
import { CarserviceService } from './car-card/carservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public cars!: Car[];

  constructor(private carSevice: CarserviceService) {}

  public ngOnInit(): void {
    this.carSevice
      .fetchCars()
      .subscribe((response: Car[]) => (this.cars = response));
  }
}
