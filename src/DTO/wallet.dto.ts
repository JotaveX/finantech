import { ArrayMinSize, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { autoFinanceDTO } from "./autoFinance.dto";
import { FinanceDTO } from "./finance.dto";
import { UserDTO } from "./user.dto";
import { Type } from "class-transformer";

export class wallet{

    @IsNotEmpty()
    @Type(() => FinanceDTO)
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    readonly finance: FinanceDTO[];

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    readonly name: string;

    @IsNotEmpty()
    @Type(() => autoFinanceDTO)
    @ArrayMinSize(1)
    @ValidateNested({ each: true })
    readonly autoFinance: autoFinanceDTO[];

    @IsNotEmpty()
    @Type(() => autoFinanceDTO)
    readonly user: UserDTO;

    @IsNumber()
    readonly balance: number;
}