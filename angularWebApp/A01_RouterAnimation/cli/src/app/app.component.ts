import { Component } from '@angular/core';
import { ProductService } from './_services/index';

@Component({
  moduleId: module.id.toString(),  
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private productService: ProductService) {
        // add some initial products
        if (productService.getAll().length === 0) {
            productService.save({ name: 'Galaxy S7', price: '838.00' });
            productService.save({ name: 'Iphone 7', price: '950.00' });
            productService.save({ name: 'BlackBerry', price: '619.00' });
        }
    }
}
