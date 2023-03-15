import {Model} from "@/cms/Domain/Model";
import {Weapon} from "@/cms/Domain/Weapon";
import {Ability} from "@/cms/Domain/Ability";

export interface UnitDetail {
    name: string;
    power: number;
    image: {
        title: string;
        url: string;
    }
    keywords: string[];
    models: Model[];
    intrinsicAbilities: Ability[];
    weapons: Weapon[];
    wargear: {
        name: string;
        abilities: string;
    }[];
}