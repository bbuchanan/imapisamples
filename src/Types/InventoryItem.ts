import type { IInventoryItemAlternatePrice } from "./InventoryItemAlternatePrice";
import type { InventoryItemLevel } from "./InventoryItemLevel";
import type { IInventoryItemSummary } from "./InventoryItemSummary";
import type { InventoryItemWarehouseDetail } from "./InventoryItemWarehouseDetail";
import type { ItemCollection } from "./ItemCollection";
import type { WebOrderItem } from "./WebOrder";

export enum InventoryItemType {
  TYPE_MOULDING = "moulding",
  TYPE_UNIT = "unit",
  TYPE_KIT = "kit",

  PRICE_UNIT = "unit",
  PRICE_CHOP = "chop",
  PRICE_ASSEMBLE = "assemble",
  PRICE_LENGTH = "length",
  PRICE_SPLIT = "split",
  PRICE_SAMPLE = "sample",
  PRICE_RAIL = "rail",
  PRICE_CUSTOM_KIT = "custom_kit",
}

export interface InventoryItem {
  id: number;
  itemnum: string;
  description: string;
  classId: null;
  taxable: boolean;
  typeId: null;
  vendorPartNum: null;
  lastPriceChangeDate: null;
  new: boolean;
  startDate: null;
  available: boolean;
  imageName: string;
  image: null;
  colorId: number;
  avgBoxFootagePackBoxQty: number;
  discountLevel: null;
  width: number;
  height: number;
  rabbet: number;
  notes: string;
  nonStockItem: boolean;
  discontinued: boolean;
  specialOrder: boolean;
  warehouseId: number;
  altItemnum: string;
  boxQuantity: number;
  boxQuantityLocked: boolean;
  defaultVendorId: number | null;
  sharedItem: boolean;
  itemType: string;
  created: Date;
  upc: null;
  matClassId: null;
  lastUpdate: null;
  isDeleted: boolean;
  sortKey: string;
  modified: Date;
  actualVendor: boolean;
  custom1: string;
  custom2: string;
  custom3: string;
  custom4: string;
  custom5: string;
  itemCollectionId: number;
  newWidth: number;
  newHeight: number;
  newRabbet: number;
  itemStyleId: number;
  itemTag1Id: number | null;
  itemTag2Id: number | null;
  countryOfOriginId: number | null;
  itemFinishId: number | null;
  itemWoodTypeId: number | null;
  detailNotes: string;
  popupNotes: string;
  countryOfOrigin: null;
  availableQty: number;
  itemCollection: ItemCollection | null;
  itemFinish: null;
  itemStyle: null;
  itemTag1: null;
  itemTag2: null;
  itemWoodType: null;
  discountRuleInventoryItems: any[];
  inventoryItemAlternatePrices: IInventoryItemAlternatePrice[];
  inventoryItemLevels: InventoryItemLevel[];
  inventoryItemPopups: any[];
  inventoryItemScans: any[];
  inventoryItemTransactions: any[];
  inventoryItemWarehouseDetails: InventoryItemWarehouseDetail[];
  purchaseOrderDetails: any[];
  workOrderDetails: any[];
  webOrderItem: WebOrderItem[];
  inventoryItemSummaries: IInventoryItemSummary[];
}
