import { Router } from 'express';
import {
	getRepuestos,
	createRepuestos,
	getRepuesto,
	updateRepuesto,
	deleteRepuesto,
} from '../controllers/repuesto.controller';

const router = Router();

router.get('/repuestos', getRepuestos);
router.post('/repuestos', createRepuestos);
router.get('/repuestos/:id', getRepuesto);
router.put('/repuestos/:id', updateRepuesto);
router.delete('/repuestos/:id', deleteRepuesto);

export default router;
