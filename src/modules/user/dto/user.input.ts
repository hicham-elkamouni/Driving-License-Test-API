import { IsNotEmpty, IsString } from 'class-validator';

export class UserInputDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    cin: string[];

    @IsString()
    @IsNotEmpty()
    age: string;

    @IsString()
    @IsNotEmpty()
    address: string;
}