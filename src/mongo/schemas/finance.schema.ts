import mongoose from "mongoose";

export const FinanceSchema = new mongoose.Schema({
    reason: String,
    value: Number,
    isWithdraw: Boolean
});

const Finance = mongoose.model("Finance", FinanceSchema);