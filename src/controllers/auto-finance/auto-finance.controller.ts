import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AutoFinanceService } from 'src/services/auto-finance/auto-finance.service';

@Controller('auto-finance')
export class AutoFinanceController {

    constructor(
        private readonly autoFinanceService: AutoFinanceService,
    ) {}

    @Get()
    async getAllAutoFinances(): Promise<any>{
        return this.autoFinanceService.getAllAutoFinances();
    }

    @Get(':id')
    async getAutoFinanceById(@Param('id') id: string): Promise<any>{
        return this.autoFinanceService.getAutoFinanceById(id);
    }

    @Post()
    async createAutoFinance(@Body() autoFinance: any): Promise<any>{
        return this.autoFinanceService.createAutoFinance(autoFinance);
    }

    @Put(':id')
    async updateAutoFinance(@Param('id') id: string, @Body() autoFinance: any): Promise<any>{
        return this.autoFinanceService.updateAutoFinance(id, autoFinance);
    }

    @Delete(':id')
    async deleteAutoFinance(@Param('id') id: string): Promise<any>{
        return this.autoFinanceService.deleteAutoFinance(id);
    }
}
