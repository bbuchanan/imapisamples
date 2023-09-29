import type { IUom } from "./Uom";

export interface IInventoryItemAlternatePrice {
  uomDescription: string;
  id: number;
  warehouseId: number;
  priceType: string;
  uomId: number;
  price: number;
  removeFromInventory: number;
  inventoryItemId: number;
  noDiscount: boolean;
  maxHeight: null;
  maxWidth: null;
  parentId: null;
  isDeleted: boolean;
  salesDefault: boolean;
  poDefault: boolean;
  uom: IUom;
}
