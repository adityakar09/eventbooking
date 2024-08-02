import { Request, Response } from 'express';
import EventModel from '../models/Event';

export const createEvent = async (req: Request, res: Response) => {
    try {
        const { name, date, totalTickets } = req.body;
        const newEvent = new EventModel({ name, date, totalTickets });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
};

export const getEvents = async (req: Request, res: Response) => {
    try {
        const events = await EventModel.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving events', error });
    }
};

export const getEventById = async (req: Request, res: Response) => {
    try {
        const event = await EventModel.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving event', error });
    }
};
