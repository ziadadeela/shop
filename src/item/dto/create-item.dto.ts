export class CreateItemDto {
  name: string;
  description?: string;
  categoryId: number;
  storageLocation: string; //foreign key?
  sellingPrice: number;
  purchasingPrice: number;
  vendorId: number;
}
