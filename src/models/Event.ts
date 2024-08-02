import mongoose, { Document, Schema } from 'mongoose';

interface IEvent extends Document {
    name: string;
    date: Date;
    totalTickets: number;
    bookedTickets: number; // Add this line
}

const eventSchema: Schema<IEvent> = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    totalTickets: { type: Number, required: true },
    bookedTickets: { type: Number, default: 0 }, // Add this line
});

const Event = mongoose.model<IEvent>('Event', eventSchema);

export default Event;
