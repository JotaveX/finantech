import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AutoFinance } from "../interfaces/autoFinance.interface";

@Injectable()
export class AutoFinanceRepository{

    constructor(
        @InjectModel('AutoFinance') private readonly autoFinanceModel: Model<AutoFinance>
    ) {}

    async createAutoFinance(autoFinance: AutoFinance): Promise<AutoFinance>{
        const newAutoFinance = new this.autoFinanceModel(autoFinance);
        return newAutoFinance.save();
    }

    async getAllAutoFinances(): Promise<AutoFinance[]>{
        return this.autoFinanceModel.find().exec();
    }

    async getAutoFinanceById(autoFinanceId: string): Promise<AutoFinance>{
        return this.autoFinanceModel.findById(autoFinanceId).exec();
    }

    async updateAutoFinance(autoFinanceId: string, autoFinance: AutoFinance): Promise<AutoFinance>{
        return this.autoFinanceModel.findByIdAndUpdate(autoFinanceId, autoFinance, {new: true});
    }

    async deleteAutoFinance(autoFinanceId: string): Promise<AutoFinance>{
        return this.autoFinanceModel.findByIdAndDelete(autoFinanceId);
    }
}