import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Finance } from 'src/mongo/interfaces/finance.interface';
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
    async createFinance(@Body() finance: Finance): Promise<Finance>{
        return this.financeService.createFinance(finance);
    }

    @Put(':id')
    async updateFinance(@Param('id') id: string, @Body() finance: Finance): Promise<Finance>{
        return this.financeService.updateFinance(id, finance);
    }

    @Delete(':id')
    async deleteFinance(@Param('id') id: string): Promise<Finance>{
        return this.financeService.deleteFinance(id);
    }

    @Post(':walletId')
    async addFinanceToWallet(@Param('walletId') walletId: string, @Body() finance: Finance): Promise<Finance>{
        return this.financeService.addFinanceToWallet(walletId, finance);
    }
}
