import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BalanceAnswerService } from './balance-answer.service';
import { CreateBalanceAnswerDto } from './dto/create-balance-answer.dto';
import { UpdateBalanceAnswerDto } from './dto/update-balance-answer.dto';

@Controller('/balance/answer')
export class BalanceAnswerController {
  constructor(private readonly balanceAnswerService: BalanceAnswerService) {}

  @Post()
  create(@Body() createBalanceAnswerDto: CreateBalanceAnswerDto) {
    return this.balanceAnswerService.create(createBalanceAnswerDto);
  }

  @Get()
  findAll() {
    return this.balanceAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.balanceAnswerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBalanceAnswerDto: UpdateBalanceAnswerDto) {
    return this.balanceAnswerService.update(+id, updateBalanceAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.balanceAnswerService.remove(+id);
  }
}
