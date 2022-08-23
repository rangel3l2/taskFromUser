import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/users.dto';
import { User } from './entity/create.user';

@Injectable()
export class UsersService {
  private cats: UserDto[] = [];

  constructor(
    @InjectRepository(User)
    private catsRepository: Repository<User>,
  ) {}

  create(user: User) {
    this.catsRepository.create(user);
    this.catsRepository.insert(user);
  }

  async findAll(): Promise<User[]> {
    // buscará todos os elementos do bd
    return await this.catsRepository.find();
  }

  async findOne(id: string): Promise<User> {
    // const user = this.cats.filter((value) => value.id === id);
    return await this.catsRepository.findOneBy({ id });
  }

  async remove(id: string) {
    // const cats_remove = this.cats.filter((value) => value.id !== id);
    // this.cats = cats_remove;
    return await this.catsRepository.delete(id);
  }

  async update(CatToUpdate: UserDto, id: string): Promise<User> {
    const user = await this.catsRepository.findOneBy({ id });
    const updated = Object.assign(CatToUpdate, user);

    return await this.catsRepository.save(updated);

    // atualizar ele na lista
  }
}
