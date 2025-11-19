// src/repositories/jeanRepository.ts
import { JeanModel } from "../models/jeanModel";
import { Jean } from "../types/jean";

export class JeanRepository {
  async findAllJeans(): Promise<Jean[]> {
    const jeans = await JeanModel.findAll();
    return jeans.map(j => j.toJSON() as Jean);
  }

  async findJeanById(id: number): Promise<Jean | null> {
    const jean = await JeanModel.findByPk(id);
    return jean ? (jean.toJSON() as Jean) : null;
  }

  async createJean(data: Omit<Jean, "id">): Promise<Jean> {
    const newJean = await JeanModel.create(data);
    return newJean.toJSON() as Jean;
  }

  async updateJean(id: number, data: Partial<Jean>): Promise<Jean | null> {
    const jean = await JeanModel.findByPk(id);
    if (!jean) return null;
    await jean.update(data);
    return jean.toJSON() as Jean;
  }

  async deleteJean(id: number): Promise<boolean> {
    const deleted = await JeanModel.destroy({ where: { id } });
    return deleted > 0;
  }
}
