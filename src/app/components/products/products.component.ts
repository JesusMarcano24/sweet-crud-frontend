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

  selectedProduct: any = null; // Guardará los detalles del producto seleccionado
  showModal: boolean = false; // Controla la visibilidad del modal

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  viewDetails(id: number) {
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
    this.productService.getProducts().subscribe({
      next: (result) => {
        this.productList = result.productDTO;
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
