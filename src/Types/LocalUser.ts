import type { IUserLite } from "../Types/User";
import type { CustomerLocationsLite, CustomerLocationsXtraLite } from "../Types/CustomerLocations";

export interface ILocalUser {
    isAuthenticated: boolean;
    warehouseId: number;
    user: IUserLite | null;
    currentLocation: CustomerLocationsLite | null;
    locations: CustomerLocationsXtraLite[];
}
 
export const defaultLocalUser: ILocalUser = {
    isAuthenticated: false,
    warehouseId: 1,
    user: null,
    currentLocation: null,
    locations: null,
};