import type { IDiscountRule } from "./DiscountRule";
import type { InventoryItem, InventoryItemType } from "./InventoryItem";
import type { IInventoryItemAlternatePrice } from "./InventoryItemAlternatePrice";
import type { IUom } from "./Uom";
import type { WorkOrder } from "./WorkOrder";

export interface WebOrder {
  id: number;
  customerId: number;
  dateCreated: Date;
  dateModified: Date;
  poNumber: string | null;
  orderStatus: string;
  workOrderComment: string | null;
  totalAmount: number | null;
  billingAddress: string | null;
  billingAddress2: string | null;
  billingCity: string | null;
  billingState: string | null;
  billingZip: string | null;
  customerShippingAddressId: number | null;
  shipVia: number | null;
  shippingCompany: string | null;
  shippingFirstName: string | null;
  shippingLastName: string | null;
  shippingAddress: string | null;
  shippingAddress2: string | null;
  shippingCity: string | null;
  shippingState: string | null;
  shippingZip: string | null;
  contactPhone: string | null;
  billToCompany: string | null;
  billToFirstName: string | null;
  billToLastName: string | null;
  email: string | null;
  workOrderId: number | null;
  customersContactId: number | null;
  customers: null;
  workOrders: WorkOrder;
  webOrderItems: WebOrderItem[];
  requiredDate: Date | null;
}

export interface WebOrderItem {
  id: number;
  webOrderId: number;
  dateCreated: Date;
  inventoryItemId: number;
  quantity: number;
  listPrice: number;
  discountPrice: number | null;
  width: number;
  height: number;
  uiFootage: number | null;
  notes: string;
  uomId: number | null;
  uom: IUom;
  itemType: InventoryItemType | null;
  inventoryItems: InventoryItem | null;
  discountRule: IDiscountRule | null;
  alternatePriceTypeId: number | null;
  alternatePrice: IInventoryItemAlternatePrice | null;
}
