import { Router, Request, Response } from 'express';
import * as jeanService from '../services/jeanService';
import { CreateJeanDTO, UpdateJeanDTO } from '../dtos/jeanDTO';

const router = Router();

// Get all jeans
router.get('/', async (req: Request, res: Response) => {
  try {
    const jeans = await jeanService.getAllJeans();
    res.json(jeans);
  } catch (error) {
    console.error('Error fetching jeans:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get jean by ID
router.get('/:id', async (req: Request, res: Response)  => {
  try {
    const id = parseInt(req.params.id, 10);
    const jean = await jeanService.getJeanById(id);
    if (!jean) {
      return res.status(404).json({ message: 'Jean not found' });
    }
    res.json(jean);
  } catch (error) {
    console.error('Error fetching jean:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a new jean
router.post('/', async (req: Request, res: Response)  => {
  try {
    const dto = new CreateJeanDTO(req.body); // Validate and transform input data
    const newJean = await jeanService.createJean(dto);
    res.status(201).json(newJean);
  } catch (error) {
    console.error('Error creating jean:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update an existing jean
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const dto = new UpdateJeanDTO({ id, ...req.body }); // Valida y transforma la data
    const updatedJean = await jeanService.updateJean(dto);
    if (!updatedJean) {
        return res.status(404).json({ message: 'Jean not found' });
    }
    res.json(updatedJean);
  } catch (error) {
    console.error('Error updating jean:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a jean
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const success = await jeanService.deleteJean(id);
    if (!success) {
        return res.status(404).json({ message: 'Jean not found' });
    }
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting jean:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
