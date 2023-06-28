import BookInventory from "./bookInventory.model";

export default interface Book{
    id: number,
    title: string,
    author: string,
    active: boolean,
    image_url: string,
    book_inventories: BookInventory[]
}