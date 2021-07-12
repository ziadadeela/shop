export class Item {
  name: string;
  category: string; //enum
  // image: File
  vendor: number;
  sellingPrice: number;
  purchasingPrice: number;
  size: string; // enum
  quantity: number;
  storageLocation: string; //foreign key
  description: string;
}
