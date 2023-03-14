export interface UnitListing {
    name: string;
    power: number;
    image: {
        title: string;
        url: string;
    }
    intrinsicAbilities: string[];
    weapons: string[];
    wargear: string[];
}