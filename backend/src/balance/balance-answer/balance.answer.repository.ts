import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AnswerBalanceSchema } from '@app/my-library/models/balance/answer.balance.schema';
import { CreateBalanceAnswerDto } from '@app/api/balance/balance-answer/dto/create-balance-answer.dto';
import { IpInfo } from '@app/my-library/interface/decorator/ip-info';

@Injectable()
export class BalanceAnswerRepository {
  constructor(@InjectModel(AnswerBalanceSchema.name) private balanceAnswerModel: Model<AnswerBalanceSchema>) {}

  async create(createBalanceAnswerDto: CreateBalanceAnswerDto, ipInfo: IpInfo) {
    await new this.balanceAnswerModel({
      _id: new Types.ObjectId(),
      ...createBalanceAnswerDto,
      ...ipInfo,
    }).save();
  }

  async findOne(idx: number) {
    const $match = { $match: { idx } };
    const $project_match = {
      $project: {
        _id: '$idx',
        value1: { $cond: [{ $eq: ['$value', 1] }, 1, 0] },
      },
    };
    const $group = {
      $group: {
        _id: '$idx',
        aAvg: { $avg: { $multiply: ['$value1', 100] } },
      },
    };
    const $project_result = {
      $project: {
        _id: 0,
        aAvg: { $round: ['$aAvg', 0] },
        bAvg: { $round: [{ $subtract: [100, '$aAvg'] }, 0] },
      },
    };

    const [data] = await this.balanceAnswerModel.aggregate([$match, $project_match, $group, $project_result]);

    return data;
  }
}
