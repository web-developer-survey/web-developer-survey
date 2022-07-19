import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { BalanceAnswerService } from './balance-answer.service';
import { CreateBalanceAnswerDto } from './dto/create-balance-answer.dto';
import { UpdateBalanceAnswerDto } from './dto/update-balance-answer.dto';
import { IpInfoDeco } from '@app/my-library/decorator/answer-info.decorator';
import { IpInfo } from '@app/my-library/interface/decorator/ip-info';

@Controller('/balance/answer')
export class BalanceAnswerController {
  constructor(private readonly balanceAnswerService: BalanceAnswerService) {}

  @Post()
  create(@Body() createBalanceAnswerDto: CreateBalanceAnswerDto, @IpInfoDeco() ipInfo: IpInfo) {
    return this.balanceAnswerService.create(createBalanceAnswerDto, ipInfo);
  }

  @Get()
  findAll() {
    return this.balanceAnswerService.findAll();
  }

  @Get(':idx')
  findOne(@Param('idx') idx: string) {
    return this.balanceAnswerService.findOne(+idx);
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
