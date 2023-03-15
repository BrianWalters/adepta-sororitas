export interface Weapon {
    name: string,
    range: number;
    weaponType: string;
    attacks: string|null,
    strength: string,
    armorPiercing: number,
    damage: string,
    abilities: string|null;
}

export interface WeaponWithUnits extends Weapon {
    units: {
        name: string;
        slug: string;
    }[]
}