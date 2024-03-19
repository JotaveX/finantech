import mongoose from "mongoose";
import { FinanceSchema } from "./finance.schema";
import { AutoFinanceSchema } from "./autoFinance.schema";
import { UserSchema } from "./user.schema";

export const WalletSchema = new mongoose.Schema({
    balance: Number,
    name: String,
    finance: [FinanceSchema],
    autoFinance: [AutoFinanceSchema],
    user: UserSchema
});

const Wallet = mongoose.model("Wallet", WalletSchema);