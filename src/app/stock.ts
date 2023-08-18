export class stock { 
    Id: number;
    constructor(Id:number,ImageUrl:string,ItemName: string ,  Price:string, Category:string, Caption:string) {
        this.Id=Id;
        this.ImageUrl=ImageUrl;
        this.ItemName=ItemName;
        this.Price=Price;
        this.Category=Category;
        this.Caption=Caption;
    }
    ImageUrl:string;
    ItemName:string;
    Price:string;
    Category:string;
    Caption:string;
}

