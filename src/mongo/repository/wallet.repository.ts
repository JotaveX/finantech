import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Wallet } from "../interfaces/wallet.interface";

@Injectable()
export class WalletRepository{
    constructor(
        @InjectModel('Wallet') private walletModel: Model<Wallet>
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
        return balance;
    }
}