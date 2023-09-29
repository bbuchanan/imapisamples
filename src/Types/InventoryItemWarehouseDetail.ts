import type { IWarehouse } from "./Warehouse";

export interface InventoryItemWarehouseDetail {
  id: number;
  inventoryItemId: number;
  warehouseId: number;
  chopPrice: number;
  lengthPrice: number;
  assemblePrice: number;
  unitPrice: number;
  splitPrice: number;
  reorderPoint: number;
  reorderPointLocked: boolean;
  reorderBaseQuantity: number;
  wasteFactor: number;
  wasteFactorLocked: boolean;
  zone: string;
  locationSortOrder: null;
  website: boolean;
  location: string;
  itemLocationId: null;
  wasteFactorTimeframe: number;
  inventoryItemPromptId: null;
  catalogId: number;
  subCatalogId: number;
  glassReport: boolean;
  samplePrice: number;
  railPrice: number | null;
  isDeleted: boolean;
  notes: string | null;
  nonStockItem: boolean;
  specialOrder: boolean;
  taxable: boolean;
  itemLocation: null;
  warehouses: IWarehouse;
  catalog: null;
  subCatalog: null;
}
