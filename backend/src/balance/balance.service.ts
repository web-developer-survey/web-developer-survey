import { Injectable } from '@nestjs/common';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';
import { BalanceRepository } from '@app/api/balance/balance.repository';

@Injectable()
export class BalanceService {
  constructor(private balanceRepo: BalanceRepository) {}

  create(createBalanceDto: CreateBalanceDto) {
    return 'This action adds a new balance';
  }

  async findAll() {
    return await this.balanceRepo.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} balance`;
  }

  update(id: number, updateBalanceDto: UpdateBalanceDto) {
    return `This action updates a #${id} balance`;
  }

  remove(id: number) {
    return `This action removes a #${id} balance`;
  }
}
