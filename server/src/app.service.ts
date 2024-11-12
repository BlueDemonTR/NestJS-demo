import { Injectable } from '@nestjs/common';
import { DatabaseItem } from './types';

@Injectable()
export class AppService {
  private cardData: DatabaseItem[] = []
  
  getHello(): string {
    return 'Hello World Hi!';
  }

  getCards(): DatabaseItem[] {
	return this.cardData;
  }

  createCard(newItem: DatabaseItem): DatabaseItem {
	const newCard = new DatabaseItem(newItem)

	this.cardData.push(newCard);
	
	return newCard;
  }

  deleteCard(id: string): string {
	this.cardData = this.cardData.filter((x: DatabaseItem) => x.id !== id);

	return id;
  }
}
