import { uuid } from "uuidv4";

class DatabaseItem {
	name: String;
	amount: Number;
	onSale: Boolean;
	id: String;

	constructor (item: DatabaseItem) {
		this.name = item.name;
		this.amount = item.amount;
		this.onSale = item.onSale;
		this.id = uuid();
	}
}

export default DatabaseItem