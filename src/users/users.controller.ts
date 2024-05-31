import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('/users')
export class UsersController {

    constructor(private userService:UsersService){

    }

    @Get()
    getUsers(){
        return this.userService.getUser()
    }

    @Get(':id')
    getOneUsers(@Param('id') id: string){
        console.log(id)
        const IDuser = id
        return this.userService.getOneUser(IDuser)
    }

    @Post()
    createUser(@Body() user:CreateUserDto){
        return this.userService.createUser(user)
    }


}
