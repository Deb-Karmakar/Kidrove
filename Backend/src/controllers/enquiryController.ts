import { Request, Response } from 'express';
import Enquiry, { IEnquiry } from '../models/Enquiry';

export const submitEnquiry = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            res.status(400).json({ success: false, message: 'Please add all fields' });
            return;
        }

        const enquiry: IEnquiry = await Enquiry.create({
            name,
            email,
            phone
        });

        res.status(201).json({
            success: true,
            data: enquiry
        });
    } catch (error: any) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map((val: any) => val.message);
            res.status(400).json({ success: false, message: messages.join(', ') });
            return;
        }
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
