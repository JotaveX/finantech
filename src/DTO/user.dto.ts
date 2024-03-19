import { IsEmail, IsNotEmpty, IsNumber, IsPositive, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UserDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @IsEmail()
    @MaxLength(50)
    readonly email: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly age: number;

    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    readonly password: string;
}