import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BalanceQuestionService } from './balance-question.service';
import { CreateBalanceQuestionDto } from './dto/create-balance-question.dto';
import { UpdateBalanceQuestionDto } from './dto/update-balance-question.dto';

@Controller('/balance/question')
export class BalanceQuestionController {
  constructor(private readonly balanceQuestionService: BalanceQuestionService) {}

  @Post()
  create(@Body() createBalanceQuestionDto: CreateBalanceQuestionDto) {
    return this.balanceQuestionService.create(createBalanceQuestionDto);
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
