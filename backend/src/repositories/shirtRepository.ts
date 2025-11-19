// src/repositories/shirtRepository.ts
import { ShirtModel } from "../models/shirtModel";
import { Shirt } from "../types/shirt";

export class ShirtRepository {
  async findAllShirts(): Promise<Shirt[]> {
    const shirts = await ShirtModel.findAll();
    return shirts.map(s => s.toJSON() as Shirt);
  }

  async findShirtById(id: number): Promise<Shirt | null> {
    const shirt = await ShirtModel.findByPk(id);
    return shirt ? (shirt.toJSON() as Shirt) : null;
  }

  async createShirt(data: Omit<Shirt, "id">): Promise<Shirt> {
    const newShirt = await ShirtModel.create(data);
    return newShirt.toJSON() as Shirt;
  }

  async updateShirt(id: number, data: Partial<Shirt>): Promise<Shirt | null> {
    const shirt = await ShirtModel.findByPk(id);
    if (!shirt) return null;
    await shirt.update(data);
    return shirt.toJSON() as Shirt;
  }

  async deleteShirt(id: number): Promise<boolean> {
    const deleted = await ShirtModel.destroy({ where: { id } });
    return deleted > 0;
  }
}
