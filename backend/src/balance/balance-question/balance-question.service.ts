import { Injectable } from '@nestjs/common';
import { CreateBalanceQuestionDto } from './dto/create-balance-question.dto';
import { UpdateBalanceQuestionDto } from './dto/update-balance-question.dto';
import { BalanceQuestionRepository } from '@app/api/balance/balance-question/balance.question.repository';

@Injectable()
export class BalanceQuestionService {
  constructor(private balanceQuestionRepo: BalanceQuestionRepository) {}

  create(createBalanceQuestionDto: CreateBalanceQuestionDto) {
    return 'This action adds a new balanceQuestion';
  }

  async findQuestion(balanceAnswers: number[]) {
    return await this.balanceQuestionRepo.findAll(balanceAnswers);
  }

  async findAll() {
    return 'find all';
  }

  findOne(id: number) {
    return `This action returns a #${id} balanceQuestion`;
  }

  update(id: number, updateBalanceQuestionDto: UpdateBalanceQuestionDto) {
    return `This action updates a #${id} balanceQuestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} balanceQuestion`;
  }
}
