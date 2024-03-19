import mongoose from "mongoose";
import { FinanceSchema } from "./finance.schema";

export const AutoFinanceSchema = new mongoose.Schema({
    finance: FinanceSchema,
    day: Number
});

const AutoFinance = mongoose.model("AutoFinance", AutoFinanceSchema);