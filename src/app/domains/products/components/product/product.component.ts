import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) img: string = '';
  @Output() addToCart = new EventEmitter();

  addProductToCart() {
    console.log('Product added to cart');
    this.addToCart.emit('Product added to cart');
  }
}
