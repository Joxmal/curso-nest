import { Body, Controller, Get, Post,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto,LoginUser } from './dto/create-user-dto';

@Controller('/users')
export class UsersController {

    constructor(private userService:UsersService){

    }

    @Get()
    getUsers(){
        return this.userService.getUser()
    }

    @Get(':id')
    getOneUser(@Param('id') id: string){
        return this.userService.getOneUser(id)
    }

    @Post()
    createUser(@Body() user:CreateUserDto){
        return this.userService.createUser(user)
    }

    @Post('login')
    loginUser(@Body() user:LoginUser ){
        return this.userService.loginUser(user)
    }


}
