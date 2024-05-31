import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService){}

    getUser(){
        return this.prisma.user.findMany()
    }

    async getOneUser(id:string){
        const user  = await this.prisma.user.findFirst({
            where:{
                id:parseInt(id)
            }
        })
        return user
        // return this.prisma.user.findFirst({})
    }

    async createUser(user:CreateUserDto){
        const existingUser = await this.prisma.user.findUnique({
            where: {
              email: user.email,
            },
        });

        if(existingUser){
            throw new ConflictException('El correo electrónico ya está en uso');
        }
        return this.prisma.user.create(
            {
                data: user
            }
        )
    }
}
