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
	return global.cardData;
  }

  @Post('createCard')
  createCard(@Body() newItem: DatabaseItem): DatabaseItem {
	const newCard = new DatabaseItem(newItem)

	global.cardData.push(newCard);
	console.log(newCard);
	

	return newCard;
  }

  @Delete('deleteCard/:id')
  deleteCard(@Param('id') id: string): string {
	global.cardData = global.cardData.filter((x: DatabaseItem) => x.id !== id);

	return id;
  }
}
