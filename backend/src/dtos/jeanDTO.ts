import { Jean } from "../types/jean";

// DTO de entrada (controller -> service)
export class CreateJeanDTO {
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  size: string;
  color: string;

  constructor(jean: Jean) {
    if (!jean.name || jean.name.trim() === "") {
      throw new Error("Name is required");
    }
    if (jean.price === undefined || jean.price <= 0) {
      throw new Error("Price must be greater than 0");
    }
    if (jean.stock === undefined || jean.stock < 0) {
      throw new Error("Stock must be 0 or greater");
    }
    if (jean.size === undefined || jean.size.trim() === "") {
      throw new Error("Size is required");
    }
    if (jean.color === undefined || jean.color.trim() === "") {
      throw new Error("Color is required");
    }
    if (jean.brand === undefined || jean.brand.trim() === "") {
      throw new Error("Brand is required");
    }
    if (!jean.description || jean.description.trim() === "") {
      throw new Error("Description is required");
    }

    this.name = jean.name;
    this.description = jean.description;
    this.price = jean.price;
    this.stock = jean.stock;
    this.brand = jean.brand;
    this.size = jean.size;
    this.color = jean.color;
  }
}

export class UpdateJeanDTO {
  id: number;
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  brand?: string;
  size?: string;
  color?: string;

  constructor(jean: Partial<Jean> & { id: number }) {
    this.id = jean.id;

    if (jean.name !== undefined) this.name = jean.name;
    if (jean.description !== undefined) this.description = jean.description;

    if (jean.price !== undefined) {
      if (jean.price > 0) this.price = jean.price;
      else throw new Error("Price must be greater than zero");
    }

    if (jean.stock !== undefined) {
      if (jean.stock >= 0) this.stock = jean.stock;
      else throw new Error("Stock must be 0 or greater");
    }

    if (jean.brand !== undefined) this.brand = jean.brand;
    if (jean.size !== undefined) this.size = jean.size;
    if (jean.color !== undefined) this.color = jean.color;
  }
}

// DTO de salida (service -> controller)
export class JeanResponseDTO {
  name: string;
  description: string;
  price: number;
  brand: string;
  size: string;
  color: string;

  constructor(jean: Jean) {
    this.name = jean.name;
    this.description = jean.description;
    this.price = jean.price;
    this.brand = jean.brand;
    this.size = jean.size;
    this.color = jean.color;
  }
}
