import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AnswerBalanceSchema } from '@app/my-library/models/balance/answer.balance.schema';
import { CreateBalanceAnswerDto } from '@app/api/balance/balance-answer/dto/create-balance-answer.dto';

@Injectable()
export class BalanceAnswerRepository {
  constructor(
    @InjectModel(AnswerBalanceSchema.name) private balanceAnswerModel: Model<AnswerBalanceSchema>,
  ) {}

  async create(createBalanceAnswerDto: CreateBalanceAnswerDto) {
    await new this.balanceAnswerModel({
      _id: new Types.ObjectId(),
      ...createBalanceAnswerDto,
    }).save();
  }
}
