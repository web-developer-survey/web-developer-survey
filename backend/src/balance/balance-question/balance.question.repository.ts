import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionBalanceSchema } from '@app/my-library/models/balance/question.balance.schema';
import { UpdateBalanceQuestionDto } from '@app/api/balance/balance-question/dto/update-balance-question.dto';
import { CreateBalanceQuestionDto } from '@app/api/balance/balance-question/dto/create-balance-question.dto';

@Injectable()
export class BalanceQuestionRepository {
  constructor(@InjectModel(QuestionBalanceSchema.name) private balanceModel: Model<QuestionBalanceSchema>) {}

  create(createBalanceDto: CreateBalanceQuestionDto) {
    return 'This action adds a new balance';
  }

  async findAll(balanceAnswers: number[]) {
    const [survey] = await this.balanceModel.aggregate([
      { $match: { idx: { $nin: balanceAnswers } } },
      { $sample: { size: 1 } },
    ]);
    const { title, idx, labelA, labelB } = survey;
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

  update(id: number, updateBalanceDto: UpdateBalanceQuestionDto) {
    return `This action updates a #${id} balance`;
  }

  remove(id: number) {
    return `This action removes a #${id} balance`;
  }
}
