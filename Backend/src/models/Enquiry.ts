import mongoose, { Document, Schema } from 'mongoose';

export interface IEnquiry extends Document {
    name: string;
    email: string;
    phone: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const enquirySchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Please add a valid email'
        ]
    },
    phone: {
        type: String,
        required: [true, 'Please add a phone number'],
        match: [
            /^[6789]\d{9}$/,
            'Please add a valid Indian phone number'
        ]
    }
}, {
    timestamps: true
});

export default mongoose.model<IEnquiry>('Enquiry', enquirySchema);
