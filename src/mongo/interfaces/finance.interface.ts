import { Document } from "mongoose";
import * as mongoose from "mongoose";

export interface Finance extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId;
    readonly reason: string;
    readonly value: number; 
    readonly isWithdraw: boolean;
}