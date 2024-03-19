import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Wallet } from "../interfaces/wallet.interface";

@Injectable()
export class WalletRepository{
    constructor(
        @InjectModel('Wallet') private readonly walletModel: Model<Wallet>
    ) {}

    async createWallet(wallet: Wallet): Promise<Wallet>{
        const newWallet = new this.walletModel(wallet);
        return newWallet.save();
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
}