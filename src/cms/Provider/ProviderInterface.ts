import {Unit} from "@/cms/Domain/Unit";

export interface ProviderInterface {
    getUnits: () => Promise<Unit[]>;
}