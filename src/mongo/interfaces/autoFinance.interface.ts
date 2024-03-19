import { Document } from "mongoose";
import * as mongoose from "mongoose";

export interface AutoFinance extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly finance: {
        readonly reason: string;
        readonly value: number;
        readonly isWithdraw: boolean;
    };
    readonly day: number;
}