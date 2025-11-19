import { JeanRepository } from '../repositories/jeanRepository';
const jeanRepository = new JeanRepository();
import { Jean } from '../types/jean';
import { CreateJeanDTO, JeanResponseDTO, UpdateJeanDTO } from '../dtos/jeanDTO';

export async function getAllJeans(): Promise<JeanResponseDTO[]> {
    const jeans: Jean[] = await jeanRepository.findAllJeans();
    return jeans.map(jean => new JeanResponseDTO(jean));
}

export async function getJeanById(id: number): Promise<JeanResponseDTO | null> {
    const jean: Jean | null = await jeanRepository.findJeanById(id);
    return jean ? new JeanResponseDTO(jean) : null;
}

export async function createJean(dto: CreateJeanDTO): Promise<JeanResponseDTO> {
    const newJean = await jeanRepository.createJean(dto);
    return new JeanResponseDTO(newJean);
}

export async function updateJean(dto: UpdateJeanDTO): Promise<JeanResponseDTO | null> {
    const updatedJean = await jeanRepository.updateJean(dto.id, dto);
    return updatedJean ? new JeanResponseDTO(updatedJean) : null;
}

export async function deleteJean(id: number): Promise<boolean> {
    return await jeanRepository.deleteJean(id);
}
