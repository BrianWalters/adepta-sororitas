import {UnitListing} from "@/cms/Domain/UnitListing";
import {UnitDetail} from "@/cms/Domain/UnitDetail";

export interface ProviderInterface {
    getUnitListings: () => Promise<UnitListing[]>;
    getUnitDetailBySlug: (slug: string) => Promise<UnitDetail>;
}