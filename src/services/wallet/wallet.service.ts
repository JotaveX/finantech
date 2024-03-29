import { Injectable } from '@nestjs/common';
import { WalletRepository } from 'src/mongo/repository/wallet.repository';

@Injectable()
export class WalletService {

    constructor(
        private readonly walletRepository: WalletRepository,
    ) {}

    async createWallet(wallet: any): Promise<any>{
        return this.walletRepository.createWallet(wallet);
    }

    async getAllWallets(): Promise<any>{
        return this.walletRepository.getAllWallets();
    }

    async getWalletById(wallet: any): Promise<any>{
        return this.walletRepository.getWalletById(wallet);
    }

    async updateWallet(id: string, wallet: any): Promise<any>{
        return this.walletRepository.updateWallet(id, wallet);
    }

    async deleteWallet(wallet: any): Promise<any>{
        return this.walletRepository.deleteWallet(wallet);
    }

    async calculateWalletBalance(wallet: any): Promise<any>{
        return this.walletRepository.calculateWalletBalance(wallet);
    }

    async deleteFinanceFromWallet(idWallet: string, idFinance: string): Promise<any>{
        return this.walletRepository.deleteFinanceFromWallet(idWallet, idFinance);
    }
}
