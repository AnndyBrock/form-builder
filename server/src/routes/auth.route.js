import express from "express";
import { validate } from "../middleware/validationMiddleware.js";
import { userRegisterSchema } from '../middleware/auth.validation.js';

import {loginHandler, registerHandler} from "../controllers/auth.controller.js";

const router = express.Router()

router.post('/register', validate(userRegisterSchema), registerHandler);
router.post('/login', loginHandler);

export  default router;

