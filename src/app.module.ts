import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanceSchema } from './mongo/schemas/finance.schema';
import { WalletSchema } from './mongo/schemas/wallet.schema';
import { UserSchema } from './mongo/schemas/user.schema';
import { AutoFinanceSchema } from './mongo/schemas/autoFinance.schema';
import { FinanceController } from './controllers/finance/finance.controller';
import { AutoFinanceController } from './controllers/auto-finance/auto-finance.controller';
import { UserController } from './controllers/user/user.controller';
import { WalletController } from './controllers/wallet/wallet.controller';
import { AutoFinanceRepository } from './mongo/repository/autoFinance.repository';
import { FinanceRepository } from './mongo/repository/finance.repository';
import { UserRepository } from './mongo/repository/user.repository';
import { WalletRepository } from './mongo/repository/wallet.repository';
import { AutoFinanceService } from './services/auto-finance/auto-finance.service';
import { FinanceService } from './services/finance/finance.service';
import { UserService } from './services/user/user.service';
import { WalletService } from './services/wallet/wallet.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/fintech'),
    MongooseModule.forFeature([
      { name: 'Finance', schema: FinanceSchema },
      { name: 'Wallet', schema: WalletSchema },
      { name: 'User', schema: UserSchema },
      { name: 'AutoFinance', schema: AutoFinanceSchema },
    ]),
  ],
  controllers: [FinanceController, WalletController, UserController, AutoFinanceController],
  providers: [FinanceService, WalletService, UserService, AutoFinanceService, FinanceRepository, WalletRepository, UserRepository, AutoFinanceRepository],
})
export class AppModule {}
