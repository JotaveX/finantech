import { IsNotEmpty, IsNumber, Matches } from "class-validator";
import { FinanceDTO } from "./finance.dto";
import { Type } from "class-transformer";

export class autoFinanceDTO {
    
    @IsNotEmpty()
    @Type(() => FinanceDTO)
    readonly finance: FinanceDTO;

    @IsNotEmpty()
    @IsNumber()
    @Matches(/^(0[1-9]|[12][0-9]|3[01])$/)
    readonly day: number;
}