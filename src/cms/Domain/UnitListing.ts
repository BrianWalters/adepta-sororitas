export interface UnitListing {
    name: string;
    power: number;
    slug: string;
    image: {
        title: string;
        url: string;
    }
    keywords: string[];
    intrinsicAbilities: string[];
    weapons: string[];
    wargear: string[];
}