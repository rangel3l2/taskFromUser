import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AllowedStatus } from '../enum/task.status';
import { Field, registerEnumType } from '@nestjs/graphql';
import { type } from 'os';


registerEnumType(AllowedStatus, {
  name: 'AllowedStatus',
});
export class Task {
 
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  nome: string;
  @Column()
  @Field(type=>AllowedStatus)
  status: AllowedStatus;
  
  //task situation {pendente, em andamento, situation}
}
