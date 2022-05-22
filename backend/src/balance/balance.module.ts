import { Module } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';
import { BalanceFactory } from '@app/my-library/models/balance/balance.schema';
import { BalanceRepository } from '@app/api/balance/balance.repository';

@Module({
  imports: [BalanceFactory],
  controllers: [BalanceController],
  providers: [BalanceService, BalanceRepository],
})
export class BalanceModule {}
