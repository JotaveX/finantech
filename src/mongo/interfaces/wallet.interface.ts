import { Document } from "mongoose";
import * as mongoose from "mongoose";

export interface Wallet extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly name: string;
    finance: Array<{
        readonly reason: string;
        readonly value: number;
        readonly isWithdraw: boolean;
    }>;
    readonly autoFinance: Array<{
        readonly finance: {
            readonly reason: string;
            readonly value: number;
            readonly isWithdraw: boolean;
        };
        readonly day: number;
    }>;
    readonly userId: {
        readonly name: string;
        readonly email: string;
        readonly password: string;
        readonly age: number;
    }
    balance: number;
}