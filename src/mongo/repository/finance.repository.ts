import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Finance } from "../interfaces/finance.interface";
import { Model } from "mongoose";

@Injectable()
export class FinanceRepository{
    constructor(
        @InjectModel('Finance') private readonly financeModel: Model<Finance>
    ) {}

    async createFinance(finance: Finance): Promise<Finance>{
        const newFinance = new this.financeModel(finance);
        return newFinance.save();
    }

    async getAllFinances(): Promise<Finance[]>{
        return this.financeModel.find().exec();
    }

    async getFinanceById(financeId: string): Promise<Finance>{
        return this.financeModel.findById(financeId).exec();
    }

    async updateFinance(financeId: string, finance: Finance): Promise<Finance>{
        return this.financeModel.findByIdAndUpdate(financeId, finance, {new: true});
    }

    async deleteFinance(financeId: string): Promise<Finance>{
        return this.financeModel.findByIdAndDelete(financeId);
    }
}