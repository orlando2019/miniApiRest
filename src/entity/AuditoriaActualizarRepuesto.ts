import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class auditoria_actualizar_repuesto {
	@PrimaryGeneratedColumn()
	ID_ACTUALIZADO!: number;

	@Column()
	USUARIO!: string;

	@Column()
	ID_REPUESTO!: string;

	@Column()
	REFERENCIA!: string;

	@Column()
	DESCRIPCION!: string;

	@Column()
	PRECIO_VIEJO!: number;

	@Column()
	PRECIO_ACTUAL!: number;

	@UpdateDateColumn()
	FECHA_MODIFICACION!: string;

	@Column()
	MENSAJE!: string;
}
