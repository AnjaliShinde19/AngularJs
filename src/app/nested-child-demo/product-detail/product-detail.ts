import { Component } from '@angular/core';
import { RouterOutlet ,RouterModule} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {}
