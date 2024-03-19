import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber, IsPositive, IsStrongPassword, IsBoolean } from "class-validator";

export class FinanceDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    readonly reason: string;

    @IsNotEmpty()
    @IsNumber()
    readonly value: number;

    @IsNotEmpty()
    @IsBoolean()
    readonly isWithdraw: boolean;
}