import { Injectable } from '@nestjs/common';
import { CreateBalanceDto } from './dto/create-balance.dto';
import { UpdateBalanceDto } from './dto/update-balance.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BalanceSchema } from '@app/my-library/models/balance/balance.schema';

@Injectable()
export class BalanceRepository {
  constructor(@InjectModel(BalanceSchema.name) private balanceModel: Model<BalanceSchema>) {}

  create(createBalanceDto: CreateBalanceDto) {
    return 'This action adds a new balance';
  }

  async findAll() {
    const [survey] = await this.balanceModel.aggregate([
      { $match: { idx: { $nin: [1, 2, 3, 4] } } },
      { $sample: { size: 1 } },
    ]);

    const { title, idx, labelA, labelB, valueA, valueB } = survey;
    //#TODO : 쿼리에서 변경시킬 것
    return {
      title,
      idx,
      labelA,
      labelB,
    };
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
