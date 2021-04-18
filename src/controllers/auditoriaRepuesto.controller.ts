import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { auditoria_actualizar_repuesto } from '../entity/AuditoriaActualizarRepuesto';

export const getAudiRepuestos = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const repuestos = await getRepository(auditoria_actualizar_repuesto).find();
	return res.json(repuestos);
};

export const getAudiRepuesto = async (req: Request, res: Response): Promise<Response> => {
	const repuesto = await getRepository(auditoria_actualizar_repuesto).find({
		REFERENCIA: req.params.referencia,
	});
	return res.json(repuesto);
};
