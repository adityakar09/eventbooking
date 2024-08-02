import { Request, Response } from 'express';
import Event from '../models/Event';

const bookTickets = async (req: Request, res: Response) => {
    const { userId, quantity, eventId } = req.body;

    try {
        // Find the event by ID
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Check if there are enough tickets available
        if (event.totalTickets - event.bookedTickets < quantity) {
            return res.status(400).json({ message: 'Not enough tickets available' });
        }

        // Update booked tickets
        event.bookedTickets += quantity;
        await event.save();

        // Respond with success
        res.status(201).json({ message: 'Tickets booked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error booking tickets', error });
    }
};

export default bookTickets;
