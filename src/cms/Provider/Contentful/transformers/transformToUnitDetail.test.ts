import {transformToUnitDetail} from "./transformToUnitDetail";

describe('transformToUnitDetail function', () => {
    it('should return a UnitDetail', () => {
        const graphqlResponse: any = {
            data: {
                unitCollection: {
                    items: [
                        {
                            name: "Dominion Squad",
                            power: 5,
                            image: {
                                title: "Dominion squad",
                                url: "https://images.ctfassets.net/wliqlzq6p5i3/hqsSKqxBANKhTiZR9bvlS/b9b23109c89cc970f5f2e9313f246e2f/dominion-squad.jpg"
                            },
                            modelsCollection: {
                                items: [
                                    {
                                        name: "Dominion",
                                        movement: 6,
                                        weaponSkill: 4,
                                        ballisticSkill: 3,
                                        strength: 3,
                                        toughness: 3,
                                        wounds: 1,
                                        attacks: 1,
                                        leadership: 7,
                                        save: 3
                                    },
                                    {
                                        name: "Dominion Superior",
                                        movement: 6,
                                        weaponSkill: 4,
                                        ballisticSkill: 3,
                                        strength: 3,
                                        toughness: 3,
                                        wounds: 1,
                                        attacks: 2,
                                        leadership: 8,
                                        save: 3
                                    }
                                ]
                            },
                            keywordsCollection: {
                                items: [
                                    {
                                        name: "Infantry"
                                    }
                                ]
                            },
                            intrinsicAbilitiesCollection: {
                                items: [
                                    {
                                        name: "Acts of Faith",
                                        rules: "You can perform an Act of Faith in each phase.\n\nYou gain one Miracle dice at the beginning of each battle round.\n\nBefore making a dice roll, you can use Act of Faith to substitute a roll with a one of the dice in the Miracle dice pool."
                                    },
                                    {
                                        name: "Sacred Rites",
                                        rules: "At the start of battle, choose a Sacred Rite.\n\n1 – Hand of the Emperor: Add 1 to Advance and charge rolls.\n2 – Spirit of the Martyr: If a model is destroyed, roll a D6. On a 5+, it may shoot or attack with a melee weapon before being removed.\n3 – Aegis of the Emperor: Add 3 to Deny the Witch tests.\n4 – Divine Guidance: When resolving an attack, a wound roll of 6 improves the armor penetration by 1.\n5 – The Passion: When resolving melee attacks, a roll of 6 scores an additional hit.\n6 – Light of the Emperor: Re-roll Morale tests."
                                    },
                                    {
                                        name: "Shield of Faith",
                                        rules: "Models in this unit have a 6+ invulnerable save."
                                    },
                                    {
                                        name: "Vanguard",
                                        rules: "At the start of the first battle round, before the first turn begins, this unit can move as if it were your Movement phase. It must end its move more than 9\" from enemy models."
                                    }
                                ]
                            },
                            weaponsCollection: {
                                items: [
                                    {
                                        name: "Frag grenades",
                                        range: 6,
                                        weaponType: {
                                            name: "Grenade"
                                        },
                                        attacks: "D6",
                                        strength: null,
                                        armorPiercing: 0,
                                        damage: "1",
                                        abilities: null
                                    },
                                    {
                                        name: "Krak grenades",
                                        range: 6,
                                        weaponType: {
                                            name: "Grenade"
                                        },
                                        attacks: "1",
                                        strength: null,
                                        armorPiercing: -1,
                                        damage: "D3",
                                        abilities: null
                                    },
                                    {
                                        name: "Boltgun",
                                        range: 24,
                                        weaponType: {
                                            name: "Rapid Fire"
                                        },
                                        attacks: "1",
                                        strength: null,
                                        armorPiercing: 0,
                                        damage: "1",
                                        abilities: null
                                    },
                                    {
                                        name: "Bolt pistol",
                                        range: 12,
                                        weaponType: {
                                            name: "Pistol"
                                        },
                                        attacks: "1",
                                        strength: null,
                                        armorPiercing: 0,
                                        damage: "1",
                                        abilities: null
                                    },
                                    {
                                        name: "Flamer",
                                        range: 8,
                                        weaponType: {
                                            name: "Assault"
                                        },
                                        attacks: "D6",
                                        strength: "4",
                                        armorPiercing: 0,
                                        damage: "1",
                                        abilities: "When resolving attacks, it automatically hits."
                                    },
                                    {
                                        name: "Meltagun",
                                        range: 12,
                                        weaponType: {
                                            name: "Assault"
                                        },
                                        attacks: "1",
                                        strength: "8",
                                        armorPiercing: -4,
                                        damage: "D6",
                                        abilities: "When within half range, roll two D6 when inflicting damage and choose the result."
                                    },
                                    {
                                        name: "Storm bolter",
                                        range: 24,
                                        weaponType: {
                                            name: "Rapid Fire"
                                        },
                                        attacks: "2",
                                        strength: "4",
                                        armorPiercing: 0,
                                        damage: "1",
                                        abilities: null
                                    }
                                ]
                            },
                            availableWargearCollection: {
                                items: [
                                    {
                                        name: "Simulacrum Imperialis",
                                        abilities: "Once per phase you can perform one Act of Faith for this unit, even if you have already performed one or more Acts of Faith in that phase."
                                    },
                                    {
                                        name: "Incensor Cherub",
                                        abilities: "Once per battle, at the beginning of a phase, that Incensor Cherub can intercede. If it does, that Incensor Cherub is removed from play and you gain one Miracle dice. Roll two D6 and choose one. The Miracle dice can only be used to perform an Act of Faith for this unit and only in this phase."
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        };

        const unitDetail = transformToUnitDetail(graphqlResponse);

        expect(unitDetail.name).toEqual('Dominion Squad');
        expect(unitDetail.power).toEqual(5);
        expect(unitDetail.image.title).toEqual('Dominion squad');
        expect(unitDetail.image.url).toEqual('https://images.ctfassets.net/wliqlzq6p5i3/hqsSKqxBANKhTiZR9bvlS/b9b23109c89cc970f5f2e9313f246e2f/dominion-squad.jpg');
        expect(unitDetail.models).toEqual([
            {
                name: 'Dominion',
                movement: 6,
                weaponSkill: 4,
                ballisticSkill: 3,
                strength:3,
                toughness:3,
                wounds: 1,
                attacks: 1,
                leadership: 7,
                save: 3
            },
            {
                name: 'Dominion Superior',
                movement: 6,
                weaponSkill: 4,
                ballisticSkill: 3,
                strength:3,
                toughness:3,
                wounds: 1,
                attacks: 2,
                leadership: 8,
                save: 3
            }
        ]);
        expect(unitDetail.keywords).toEqual(['Infantry']);
        expect(unitDetail.intrinsicAbilities).toEqual([
            {
                name: "Acts of Faith",
                rules: "You can perform an Act of Faith in each phase.\n\nYou gain one Miracle dice at the beginning of each battle round.\n\nBefore making a dice roll, you can use Act of Faith to substitute a roll with a one of the dice in the Miracle dice pool."
            },
            {
                name: "Sacred Rites",
                rules: "At the start of battle, choose a Sacred Rite.\n\n1 – Hand of the Emperor: Add 1 to Advance and charge rolls.\n2 – Spirit of the Martyr: If a model is destroyed, roll a D6. On a 5+, it may shoot or attack with a melee weapon before being removed.\n3 – Aegis of the Emperor: Add 3 to Deny the Witch tests.\n4 – Divine Guidance: When resolving an attack, a wound roll of 6 improves the armor penetration by 1.\n5 – The Passion: When resolving melee attacks, a roll of 6 scores an additional hit.\n6 – Light of the Emperor: Re-roll Morale tests."
            },
            {
                name: "Shield of Faith",
                rules: "Models in this unit have a 6+ invulnerable save."
            },
            {
                name: "Vanguard",
                rules: "At the start of the first battle round, before the first turn begins, this unit can move as if it were your Movement phase. It must end its move more than 9\" from enemy models."
            }
        ]);
        expect(unitDetail.weapons[0].weaponType).toEqual('Grenade');
    });
});