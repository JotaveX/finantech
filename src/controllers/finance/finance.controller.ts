import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FinanceService } from 'src/services/finance/finance.service';

@Controller('finance')
export class FinanceController {

    constructor(
        private readonly financeService: FinanceService,
    ) {}

    @Get()
    async getAllFinances(): Promise<any>{
        return this.financeService.getAllFinances();
    }

    @Get(':id')
    async getFinanceById(@Param('id') id: string): Promise<any>{
        return this.financeService.getFinanceById(id);
    }

    @Post()
    async createFinance(@Body() finance: any): Promise<any>{
        return this.financeService.createFinance(finance);
    }

    @Put(':id')
    async updateFinance(@Param('id') id: string, @Body() finance: any): Promise<any>{
        return this.financeService.updateFinance(id, finance);
    }

    @Delete(':id')
    async deleteFinance(@Param('id') id: string): Promise<any>{
        return this.financeService.deleteFinance(id);
    }
}
