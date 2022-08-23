import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  nome: string;
  //task situation {pendente, em andamento, situation}
}
