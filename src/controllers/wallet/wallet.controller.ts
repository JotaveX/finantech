import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WalletService } from 'src/services/wallet/wallet.service';

@Controller('wallet')
export class WalletController {

    constructor(
        private readonly walletService: WalletService,
    ) {}

    @Get()
    async getAllWallets(): Promise<any>{
        return this.walletService.getAllWallets();
    }

    @Get(':id')
    async getWalletById(@Param('id') id: string): Promise<any>{
        return this.walletService.getWalletById(id);
    }

    @Post()
    async createWallet(@Body() wallet: any): Promise<any>{
        return this.walletService.createWallet(wallet);
    }

    @Put(':id')
    async updateWallet(@Param('id') id: string, @Body() wallet: any): Promise<any>{
        return this.walletService.updateWallet(id, wallet);
    }

    @Delete(':id')
    async deleteWallet(@Param('id') id: string): Promise<any>{
        return this.walletService.deleteWallet(id);
    }

    @Post(':id/finance')
    async addFinanceToWallet(@Param('id') id: string, @Body() finance: any): Promise<any>{
        return this.walletService.addFinanceToWallet(id, finance);
    }

    @Get(':id/balance')
    async calculateWalletBalance(@Param('id') id: string): Promise<any>{
        return this.walletService.calculateWalletBalance(id);
    }
}
