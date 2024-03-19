import { Injectable } from '@nestjs/common';
import { AutoFinanceRepository } from 'src/mongo/repository/autoFinance.repository';

@Injectable()
export class AutoFinanceService {

    constructor(
        private readonly autoFinanceRepository: AutoFinanceRepository,
    ) {}

    async createAutoFinance(autoFinance: any): Promise<any>{
        return this.autoFinanceRepository.createAutoFinance(autoFinance);
    }

    async getAllAutoFinances(): Promise<any>{
        return this.autoFinanceRepository.getAllAutoFinances();
    }

    async getAutoFinanceById(autoFinance: any): Promise<any>{
        return this.autoFinanceRepository.getAutoFinanceById(autoFinance);
    }

    async updateAutoFinance(id: string, autoFinance: any): Promise<any>{
        return this.autoFinanceRepository.updateAutoFinance(id, autoFinance);
    }

    async deleteAutoFinance(autoFinance: any): Promise<any>{
        return this.autoFinanceRepository.deleteAutoFinance(autoFinance);
    }
}
