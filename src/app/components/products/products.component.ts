import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../interfaces/products.interface';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: ProductInterface = {
    code: '',
    error: '',
    productDTO: [
      {
        id: 0,
        name: 'Canoli',
        price: 100,
        stock: 51,
        category: 'Sweets',
      },
      {
        id: 1,
        name: 'Torta',
        price: 10,
        stock: 501,
        category: 'Sweets',
      },
      {
        id: 2,
        name: 'Tres leches',
        price: 150,
        stock: 1,
        category: 'Sweets',
      },
      {
        id: 3,
        name: 'Opera',
        price: 115,
        stock: 10,
        category: 'Sweets',
      },
    ],
  };

  selectedProduct: any = null;
  showModal: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.login();
  }

  login() {
    const loginPayload = {
      email: 'jorge@gmail.com',
      password1: '000',
      password2: '',
    };

    this.productService.login(loginPayload).subscribe({
      next: (response: any) => {
        console.log('Login exitoso:', response);
        this.isLoggedIn = true;
        this.getProducts();
      },
      error: (err) => {
        console.error('Error al hacer login:', err);
      },
    });
  }

  viewDetails(id: number) {
    if (!this.isLoggedIn) {
      console.error('Usuario no logueado.');
      return;
    }

    this.productService.getProductDetails(id).subscribe({
      next: (productDetails) => {
        this.selectedProduct = productDetails;
        this.showModal = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  buyProduct(id: number) {
    console.log(`Comprar el producto con ID: ${id}`);
  }

  getProducts() {
    if (!this.isLoggedIn) {
      console.error('Usuario no logueado.');
      return;
    }

    this.productService.getProducts().subscribe({
      next: (result) => {
        console.log(result.productDTO);
        this.productList = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  closeModal() {
    this.showModal = false;
    this.selectedProduct = null;
  }
}
