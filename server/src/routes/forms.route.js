import express from "express";
import { validate } from "../middleware/validationMiddleware.js";
import { formSchema } from '../middleware/forms.validation.js';
import { saveForm, fetchForms, fetchForm, updateForm } from "../controllers/form.controller.js";

const router = express.Router()

router.post('/save', validate(formSchema), saveForm);
router.get('/list', fetchForms);
router.put('/update/:id',validate(formSchema), updateForm);
router.get('/:id', fetchForm);

export  default router;
