import { Router, Request, Response } from 'express';
import * as shirtService from '../services/shirtService';
import { CreateShirtDTO, UpdateShirtDTO } from '../dtos/shirtDTO';

const router = Router();

// Get all shirts
router.get('/', async (req: Request, res: Response) => {
  try {
    const shirts = await shirtService.getAllShirts();
    res.json(shirts);
  } catch (error) {
    console.error('Error fetching shirts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get shirt by ID
router.get('/:id', async (req: Request, res: Response)  => {
  try {
    const id = parseInt(req.params.id, 10);
    const shirt = await shirtService.getShirtById(id);
    if (!shirt) {
      return res.status(404).json({ message: 'Shirt not found' });
    }
    res.json(shirt);
  } catch (error) {
    console.error('Error fetching shirt:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a new shirt
router.post('/', async (req: Request, res: Response)  => {
  try {
    const dto = new CreateShirtDTO(req.body); // Validate and transform input data
    const newShirt = await shirtService.createShirt(dto);
    res.status(201).json(newShirt);
  } catch (error) {
    console.error('Error creating shirt:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update an existing shirt
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const dto = new UpdateShirtDTO({ id, ...req.body}); // Valida y transforma la data, además valida que el id venga en los parametros y permite a los demas datos ser opcionales
    const updatedShirt = await shirtService.updateShirt(dto);
    if (!updatedShirt) {
        return res.status(404).json({ message: 'Shirt not found' });
    }
    res.json(updatedShirt);
  } catch (error) {
    console.error('Error updating shirt:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a shirt
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const success = await shirtService.deleteShirt(id);
    if (!success) {
        return res.status(404).json({ message: 'Shirt not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting shirt:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;