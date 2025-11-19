import { Shirt } from "../types/shirt";

//DTO de entrada  (controller -> service)
export class CreateShirtDTO {
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  size: string;
  color: string;

  constructor(shirt: Shirt) {
    if (!shirt.name || shirt.name.trim() === "") {
      throw new Error("Name is required");
    }
    if (shirt.price === undefined || shirt.price <= 0) {
      throw new Error("Price must be greater than 0");
    }
    if (shirt.stock === undefined || shirt.stock < 0) {
      throw new Error("Stock must be 0 or greater");
    }
    if (shirt.size === undefined || shirt.size.trim() === "") {
      throw new Error("Size is required");
    }
    if (shirt.color === undefined || shirt.color.trim() === "") {
      throw new Error("Color is required");
    }
    if (shirt.brand === undefined || shirt.brand.trim() === "") {
      throw new Error("Brand is required");
    }
    if (!shirt.description || shirt.description.trim() === "") {
      throw new Error("Description is required");
    }


    this.name = shirt.name;
    this.description = shirt.description;
    this.price = shirt.price;
    this.stock = shirt.stock;
    this.brand = shirt.brand;
    this.size = shirt.size;
    this.color = shirt.color;
  }
}

export class UpdateShirtDTO {
  id: number;
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  brand?: string;
  size?: string;
  color?: string;

  constructor(shirt: Partial<Shirt> & { id: number }) {
    this.id = shirt.id;

    if (shirt.name !== undefined) this.name = shirt.name;
    if (shirt.description !== undefined) this.description = shirt.description;
    if (shirt.price !== undefined && shirt.price > 0) this.price = shirt.price;
    else {throw new Error('Price must be greater than zero');}
    if (shirt.stock !== undefined && shirt.stock > 0) this.stock = shirt.stock;
    else {throw new Error('Stock must be greater than zero');}
    if (shirt.brand !== undefined) this.brand = shirt.brand;
    if (shirt.size !== undefined) this.size = shirt.size;
    if (shirt.color !== undefined) this.color = shirt.color;
  }
}

//DTO de salida (service -> controller)
export class ShirtResponseDTO {
  name: string;
  description: string;
  price: number;
  brand: string;
  size: string;
  color: string;

  constructor(shirt: Shirt) {
    this.name = shirt.name;
    this.description = shirt.description;
    this.price = shirt.price;
    this.brand = shirt.brand;
    this.size = shirt.size;
    this.color = shirt.color;
  }
}
