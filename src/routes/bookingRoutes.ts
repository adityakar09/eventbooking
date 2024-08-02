import express from 'express';
import bookTickets from '../controllers/bookingController';

const router = express.Router();

router.post('/book', bookTickets);

export default router;
