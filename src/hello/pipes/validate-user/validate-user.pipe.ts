import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value',value)


    const ageNumber = parseInt(value.age.toString(),10)

    if (isNaN(ageNumber)){
      //  hello --> NaN
      throw new HttpException('la edad deberia ser un numero', HttpStatus.BAD_REQUEST)
    }
    return {...value, age:ageNumber};
  }
}
