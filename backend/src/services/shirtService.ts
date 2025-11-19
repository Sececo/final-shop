import { ShirtRepository } from '../repositories/shirtRepository';
const shirtRepository = new ShirtRepository();
import { Shirt } from '../types/shirt';
import { CreateShirtDTO, ShirtResponseDTO, UpdateShirtDTO } from '../dtos/shirtDTO';

export async function getAllShirts(): Promise<ShirtResponseDTO[]> {
    const shirts: Shirt[] = await shirtRepository.findAllShirts();
    return shirts.map(shirt => new ShirtResponseDTO(shirt));
}

export async function getShirtById(id: number): Promise<ShirtResponseDTO | null> {
    const shirt: Shirt | null = await shirtRepository.findShirtById(id);
    return shirt ? new ShirtResponseDTO(shirt) : null;
}

export async function createShirt(dto: CreateShirtDTO): Promise<ShirtResponseDTO> {
    const newShirt = await shirtRepository.createShirt(dto);
    return new ShirtResponseDTO(newShirt);
}

export async function updateShirt(dto: UpdateShirtDTO): Promise<ShirtResponseDTO | null> {
    const updatedShirt= await shirtRepository.updateShirt(dto.id, dto);
    return updatedShirt ? new ShirtResponseDTO(updatedShirt) : null;
}

export async function deleteShirt(id: number): Promise<boolean> {
    return await shirtRepository.deleteShirt(id);
}