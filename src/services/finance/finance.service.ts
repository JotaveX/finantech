import { Injectable } from '@nestjs/common';
import { Finance } from 'src/mongo/interfaces/finance.interface';
import { FinanceRepository } from 'src/mongo/repository/finance.repository';

@Injectable()
export class FinanceService {

    constructor(
        private readonly financeRepository: FinanceRepository,
    ) {}

    async createFinance(finance: Finance): Promise<Finance>{
        return this.financeRepository.createFinance(finance);
    }

    async getAllFinances(): Promise<Finance[]>{
        return this.financeRepository.getAllFinances();
    }

    async getFinanceById(finance: string): Promise<Finance>{
        return this.financeRepository.getFinanceById(finance);
    }

    async updateFinance(id: string, finance: Finance): Promise<Finance>{
        return this.financeRepository.updateFinance(id, finance);
    }

    async deleteFinance(finance: string): Promise<Finance>{
        return this.financeRepository.deleteFinance(finance);
    }

    async addFinanceToWallet(wallet: any, finance: Finance): Promise<Finance>{
        return this.financeRepository.addFinanceToWallet(wallet, finance);
    }
}
