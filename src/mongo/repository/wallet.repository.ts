import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Wallet } from "../interfaces/wallet.interface";
import { FinanceRepository } from "./finance.repository";

@Injectable()
export class WalletRepository{
    constructor(
        @InjectModel('Wallet') private walletModel: Model<Wallet>,
        private readonly financeRepository: FinanceRepository
    ) {}

    async createWallet(wallet: Wallet): Promise<Wallet>{
        wallet.balance = 0;
        const newWallet = new this.walletModel(wallet);
        let walletDB = newWallet.save();
        this.calculateWalletBalance(await walletDB);
        return newWallet;
    }

    async getAllWallets(): Promise<Wallet[]>{
        return this.walletModel.find().exec();
    }

    async getWalletById(walletId: string): Promise<Wallet>{
        return this.walletModel.findById(walletId).exec();
    }

    async updateWallet(walletId: string, wallet: Wallet): Promise<Wallet>{
        return this.walletModel.findByIdAndUpdate(walletId, wallet, {new: true});
    }

    async deleteWallet(walletId: string): Promise<Wallet>{
        return this.walletModel.findByIdAndDelete(walletId);
    }

    async calculateWalletBalance(wallet: Wallet): Promise<number>{
        const finances = wallet.finance;
        let balance = 0;
        for (let finance of finances){
            balance += finance.value;
        }
        wallet.balance = balance;
        await wallet.save();
        return balance;
    }

    async deleteFinanceFromWallet(idWallet: string, idFinance: string): Promise<Wallet>{
        let finance = await this.financeRepository.getFinanceById(idFinance);
        let walletDB = await this.walletModel.findById(idWallet);
        let wallet = await walletDB;
        let finances = wallet.finance;
        let index = finances.indexOf(finance);
        finances.splice(index, 1);
        wallet.finance = finances;
        this.financeRepository.deleteFinance(idFinance);
        this.calculateWalletBalance(wallet);
        return wallet;
    }
}