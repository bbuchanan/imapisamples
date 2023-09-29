export interface IWarehouse {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  status: number;
  domain: string;
  phone: string;
  fax: string;
  minimumChopFootage: number;
  defaultMouldingPrice: string;
  companyId?: number | null;
  useCustomMatCalc: boolean;
  defaultSearchBox: string;
  autoprintKey?: string | null;
  vendorId3m?: number | null;
  vendorIdIm: number;
  channelPartnerCode3m: string;
  defaultWoReqdate: boolean;
  deleteQuotesAfter?: number | null;
  defaultOrderQuantity?: number | null;
  address2: string;
  paymentToAddress: string;
  paymentToAddress2?: string | null;
  paymentToCity: string;
  paymentToState: string;
  paymentToZip: string;
  paymentToName: string;
  pickTicketCopies: number;
  printExtraPickTicket: boolean;
  shareGlobalItems: boolean;
  customMatPriceThreshold?: number | null;
  internalName: string;
  sampleDeductFromInv: number;
  facebookUrl?: string | null;
  metaKeywords?: string | null;
  metaDescription?: string | null;
  contactFormEmail?: string | null;
  contactEmail?: string | null;
  orderNotificationEmail?: string | null;
  siteAdministratorEmail?: string | null;
  uaTrackingNumber?: string | null;
  allowDimension: boolean;
  locationImage: string;
  locationMapUrl: string;
  warehousePriceTypes: IWarehousePriceType[];
}

export interface IWarehousePriceType{
  id: number;
  warehouseId: number;
  priceType: string;
}