import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id:1,
            name:"joh doe",
            phone:"12345678"
        },
        {
            id:2,
            name:"jone doe",
            phone:"12345678sds"
        },
    ]

    getUser(){
        return this.users
    }

}
