import { Injectable, ConflictException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto, LoginUser } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

    constructor(
        private prisma: PrismaService,
        private jwtService:JwtService
    ){

    }

    getUser(){
        return this.prisma.user.findMany()
    }

    async getOneUser(id:string){
        const user  = await this.prisma.user.findFirst({
            where:{
                id:parseInt(id)
            }
        })

        if(!user){ throw new HttpException('no existe este usuario', HttpStatus.CONFLICT)  }
        
        return user
        // return this.prisma.user.findFirst({})
    }

    async createUser(userObject:CreateUserDto){
        
        const existingUser = await this.prisma.user.findUnique({
            where:{
                email: userObject.email
            }
        })
        if(existingUser) throw new ConflictException('El correo electrónico ya está en uso');

        const {password} =  userObject
        const plainToHash = await hash(password,10)

        userObject = {
            ...userObject,
            password: plainToHash
        }

        console.log(userObject)
        
        return this.prisma.user.create(
            {
                data: userObject
            }
        )
    }


    async loginUser(userObjectLogin:LoginUser){
        console.log("login")
        const findUser = await this.prisma.user.findUnique({
            where: {
                email: userObjectLogin.email
            }
        })

        if (!findUser) throw new HttpException('este usuario no existe', HttpStatus.FORBIDDEN)
        
        const checkPassword = await compare(userObjectLogin.password, findUser.password)
        console.log(checkPassword)

        if(!checkPassword) throw new HttpException('contraseña incorrecta', 403)

        const payload = { id: findUser.id, name:findUser.name}
        const token = this.jwtService.sign(payload)

        const data  = {
            user: findUser,
            token
        }

    
        return data
    }

}
