const Enquiry = require('../models/Enquiry');

// @desc    Register new enquiry
// @route   POST /api/enquiry
// @access  Public
const submitEnquiry = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        // Simple validation
        if (!name || !email || !phone) {
            return res.status(400).json({ success: false, message: 'Please add all fields' });
        }

        // Create enquiry
        const enquiry = await Enquiry.create({
            name,
            email,
            phone
        });

        res.status(201).json({
            success: true,
            data: enquiry
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ success: false, message: messages.join(', ') });
        }
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = {
    submitEnquiry
};
