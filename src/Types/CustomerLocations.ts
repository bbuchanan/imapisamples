import type { Customers } from "./Customers";
import type { IWarehouse } from "./Warehouse";

export interface CustomerLocations {
  id: number;
  createDt: Date;
  customerId: number;
  type: string;
  name: string;
  address: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  mobile: string;
  fax: string;
  email: string;
  mailingList: boolean;
  phoneJustNumbers: string;
  firstName: string;
  lastName: string;
  title: string;
  password: null;
  webActive: boolean;
  emailInvoices: boolean;
  emailStatements: boolean;
  notes: string;
  customer: Customers;
  customerShoppingWarehouse: IWarehouse | null;
}

export interface CustomerLocationsLite {
  id: number;
  name: string;
  fullName: string;
  cId: number;
  cNum: string;
  cName: string;
  address: string;
  wName: string;
  wId: number | null;
}

export interface CustomerLocationsXtraLite {
  id: number;
  cNum: string;
  cName: string;
  address: string;
  wName: string;
}
