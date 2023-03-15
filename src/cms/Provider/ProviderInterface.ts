import {UnitListing} from "@/cms/Domain/UnitListing";
import {UnitDetail} from "@/cms/Domain/UnitDetail";
import {Ability} from "@/cms/Domain/Ability";
import {WeaponWithUnits} from "@/cms/Domain/Weapon";

export interface ProviderInterface {
    getUnitListings: () => Promise<UnitListing[]>;
    getUnitDetailBySlug: (slug: string) => Promise<UnitDetail>;
    getAbilities: () => Promise<Ability[]>;
    getWeaponsWithUnitReferences: () => Promise<WeaponWithUnits[]>
}