import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BalanceQuestionService } from './balance-question.service';
import { UpdateBalanceQuestionDto } from './dto/update-balance-question.dto';
import { FindBalanceQuestionDto } from '@app/api/balance/balance-question/dto/find-balance-question.dto';

@Controller('/balance/question')
export class BalanceQuestionController {
  constructor(private readonly balanceQuestionService: BalanceQuestionService) {}

  @Post()
  findQuestion(@Body() { balanceAnswers }: FindBalanceQuestionDto) {
    return this.balanceQuestionService.findQuestion(balanceAnswers);
  }

  @Get()
  findAll() {
    return this.balanceQuestionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.balanceQuestionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBalanceQuestionDto: UpdateBalanceQuestionDto) {
    return this.balanceQuestionService.update(+id, updateBalanceQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.balanceQuestionService.remove(+id);
  }
}
