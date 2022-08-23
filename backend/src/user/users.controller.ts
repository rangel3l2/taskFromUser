import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
import { User } from './entity/create.user';

// CatService catService = new CatService();

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() User: User) {
    // return `estou criando um user de ${CatDto.age}
    // anos chamado ${CatDto.name}`;
    this.usersService.create(User);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCat: UserDto) {
    // this.catsService.update(updateCat, id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
