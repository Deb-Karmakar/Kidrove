import express, { Router } from 'express';
import { submitEnquiry } from '../controllers/enquiryController';

const router: Router = express.Router();

router.post('/', submitEnquiry);

export default router;
