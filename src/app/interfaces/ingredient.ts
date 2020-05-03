export interface IIngredient {
    title: string;
    description: string;
    price: string;
    imageURL: string;
    id: string;
    sandwichId: string;
}

export class Ingredient implements IIngredient{
    title: string;
    description: string;
    price: string;
    imageURL: string;
    id: string;
    sandwichId: string;

    constructor( title: string, description: string, price: string, imageURL: string  )
    {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageURL = imageURL;
    }
}
