import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testeprime',
  templateUrl: './testeprime.component.html',
  styleUrls: ['./testeprime.component.css']
})
export class TesteprimeComponent implements OnInit {

  loading: boolean;

    cars: Car[];
    
    cols: any[];
    
    constructor(private carService: CarService) { }

    ngOnInit() {
        this.loading = true;
        setTimeout(() => {
            this.carService.getCarsSmall().then(cars => this.cars = cars);
            this.loading = false;
        }, 1000);
        
        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }
}

