import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseItem } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getCards')
  getCards(): DatabaseItem[] {
	return this.appService.getCards();
  }

  @Post('createCard')
  createCard(@Body() newItem: DatabaseItem): DatabaseItem {
	return this.appService.createCard(newItem);
  }

  @Delete('deleteCard/:id')
  deleteCard(@Param('id') id: string): string {
	return this.appService.deleteCard(id);
  }
}
