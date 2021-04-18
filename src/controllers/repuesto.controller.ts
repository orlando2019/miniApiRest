import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Repuesto } from '../entity/Repuesto';

// CRUD DE LA TABLA DE REPUESTOS
export const getRepuestos = async (req: Request, res: Response): Promise<Response> => {
	const repuestos = await getRepository(Repuesto).find();
	return res.json(repuestos);
};

export const createRepuestos = async (req: Request, res: Response): Promise<Response> => {
	const newRepuesto = getRepository(Repuesto).create(req.body);
	const result = await getRepository(Repuesto).save(newRepuesto);
	return res.json({ Mensaje: 'Repuesto Creado', result });
};

export const getRepuesto = async (req: Request, res: Response): Promise<Response> => {
	const repuesto = await getRepository(Repuesto).findOne(req.params.id);
	if (!repuesto) {
		res.status(404).json('no se encontro este repuesto');
	}
	return res.json(repuesto);
};

export const updateRepuesto = async (req: Request, res: Response): Promise<Response> => {
	const repuesto = await getRepository(Repuesto).findOne(req.params.id);
	if (repuesto) {
		getRepository(Repuesto).merge(repuesto, req.body);
		const result = await getRepository(Repuesto).save(repuesto);
		return res.json({ Mensaje: `Repuesto actualizado`, result });
	}
	return res.status(404).json({ Mensaje: 'Repuesto no encontrado' });
};

export const deleteRepuesto = async (req: Request, res: Response): Promise<Response> => {
	const result = await getRepository(Repuesto).delete(req.params.id);
	/* if (!result) {
		res.status(404).json({ Mensaje: 'Repuesto No Encontrado' });
	} */
	return res.json({ Mensaje: 'Repuesto Eliminado Satisfactoriamente', result });
};
