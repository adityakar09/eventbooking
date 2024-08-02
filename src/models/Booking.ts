import { Schema, model } from 'mongoose';

interface Booking {
    userId: string;
    eventId: string;
    quantity: number;
    timestamp: Date;
}

const bookingSchema = new Schema<Booking>({
    userId: { type: String, required: true },
    eventId: { type: String, required: true },
    quantity: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

const BookingModel = model<Booking>('Booking', bookingSchema);
export default BookingModel;
