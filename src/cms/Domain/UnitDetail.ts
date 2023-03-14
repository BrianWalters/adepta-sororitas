import {Model} from "@/cms/Domain/Model";
import {Weapon} from "@/cms/Domain/Weapon";

export interface UnitDetail {
    name: string;
    power: number;
    image: {
        title: string;
        url: string;
    }
    keywords: string[];
    models: Model[];
    intrinsicAbilities: {
        name: string;
        rules: string;
    }[];
    weapons: Weapon[];
    wargear: {
        name: string;
        ability: string;
    }[];
}