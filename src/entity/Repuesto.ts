import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Repuesto {
	@PrimaryGeneratedColumn('uuid')
	id!: string;

	@Column({ type: 'varchar', unique: true, length: 50 })
	referencia!: string;

	@Column()
	descripcion!: string;

	@Column({ type: 'int' })
	precio!: number;

	@CreateDateColumn({ type: 'timestamp' })
	fechaCreacion!: string;

	@UpdateDateColumn()
	fechaActualizacion!: string;
}
