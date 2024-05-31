import { IsEmail, IsNotEmpty, IsNumber, IsString, IsStrongPassword } from "class-validator"



export class CreateUserDto{

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email:string

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1
  })
  @IsNotEmpty()
  password:string

  @IsNotEmpty()
  @IsString()
  name:string

  // @IsNotEmpty()
  // @IsNumber()
  // age:number
}

export class LoginUser {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email:string

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1
  })
  @IsNotEmpty()
  password:string
}