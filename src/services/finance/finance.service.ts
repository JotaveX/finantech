import { Injectable } from '@nestjs/common';
import { FinanceRepository } from 'src/mongo/repository/finance.repository';

@Injectable()
export class FinanceService {

    constructor(
        private readonly financeRepository: FinanceRepository,
    ) {}

    async createFinance(finance: any): Promise<any>{
        return this.financeRepository.createFinance(finance);
    }

    async getAllFinances(): Promise<any>{
        return this.financeRepository.getAllFinances();
    }

    async getFinanceById(finance: any): Promise<any>{
        return this.financeRepository.getFinanceById(finance);
    }

    async updateFinance(id: string, finance: any): Promise<any>{
        return this.financeRepository.updateFinance(id, finance);
    }

    async deleteFinance(finance: any): Promise<any>{
        return this.financeRepository.deleteFinance(finance);
    }
}
