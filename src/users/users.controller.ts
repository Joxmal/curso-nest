import { Body, Controller, Get, Post,Param, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto,LoginUser } from './dto/create-user-dto';
import { JwtAuthGuard } from './guards/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('/users')
@ApiTags('users')
export class UsersController {

    constructor(private userService:UsersService){

    }


    @Get()
    @UseGuards(JwtAuthGuard)
    @ApiOperation({summary:'Optiene todos los usuarios'})
    @ApiResponse({status:200, description:'obtiene todos los usuarios'})
    @ApiResponse({status:403, description:'forbidden'})
    getUsers(){
        return this.userService.getUser()
    }

    @Get(':id')
    @ApiOperation({summary:'Optiene un usuario por id'})
    getOneUser(@Param('id') id: string){
        return this.userService.getOneUser(id)
    }

    @Post()
    @ApiOperation({summary:'Crea un usuario'})
    createUser(@Body() user:CreateUserDto){
        return this.userService.createUser(user)
    }

    @Post('login')
    @ApiOperation({summary:'logea a un usaurio y retorna un jwt'})
    loginUser(@Body() user:LoginUser ){
        return this.userService.loginUser(user)
    }


}
