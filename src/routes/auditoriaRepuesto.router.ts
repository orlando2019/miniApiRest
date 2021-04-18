import { Router } from 'express';
import {
	getAudiRepuesto,
	getAudiRepuestos,
} from '../controllers/auditoriaRepuesto.controller';

const router = Router();

router.get('/auditoria', getAudiRepuestos);
router.get('/auditoria/:referencia', getAudiRepuesto);

export default router;
