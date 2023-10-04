export class foods{
    id!: number;
    price!: number;
    name!: string;
    favorite: boolean = false;
    stars : number = 0;
    tags?: string[];
    imageUrl!: string;
    cookingTime!: string;
    origins!: string[]; 
}