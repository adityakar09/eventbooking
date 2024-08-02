import express, { Request, Response } from 'express';
import Event from '../models/Event'; // Adjust the import path if necessary

const router = express.Router();

router.post('/events', async (req: Request, res: Response) => {
    try {
        const { name, date, totalTickets } = req.body;

        const event = new Event({
            name,
            date,
            totalTickets,
        });

        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({
            message: 'Error creating event',
            error,
        });
    }
});

export default router;
