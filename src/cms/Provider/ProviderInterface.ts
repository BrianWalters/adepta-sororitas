import {UnitListing} from "@/cms/Domain/UnitListing";

export interface ProviderInterface {
    getUnitListing: () => Promise<UnitListing[]>;
}