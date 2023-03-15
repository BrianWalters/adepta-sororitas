import {ProviderInterface} from "@/cms/Provider/ProviderInterface";
import {UnitListing} from "@/cms/Domain/UnitListing";
import {unitListingsAlphabetical} from "@/cms/Provider/Contentful/queries/unitListingsAlphabetical";
import {UnitDetail} from "@/cms/Domain/UnitDetail";
import {unitDetailBySlug} from "@/cms/Provider/Contentful/queries/unitDetailBySlug";
import {transformToUnitDetail} from "@/cms/Provider/Contentful/transformers/transformToUnitDetail";
import {Ability} from "@/cms/Domain/Ability";
import {abilities} from "@/cms/Provider/Contentful/queries/abilities";
import {WeaponWithUnits} from "@/cms/Domain/Weapon";
import {weaponsWithUnitReferences} from "@/cms/Provider/Contentful/queries/weaponsWithUnitReferences";

class ContentfulProvider implements ProviderInterface {
    constructor(private space: string, private accessToken: string) {

    }

    async makeGraphQLQuery(query: string, variables: object = {}): Promise<any> {
        return fetch(`https://graphql.contentful.com/content/v1/spaces/${this.space}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({ query, variables })
        }).then((response) => response.json());
    }

    async getUnitListings(): Promise<UnitListing[]> {
        return this.makeGraphQLQuery(unitListingsAlphabetical)
            .then(response => {
                const unitListings: UnitListing[] = [];
                response.data.unitCollection.items.forEach((unitItem: any) => {
                    unitListings.push({
                        name: unitItem.name,
                        slug: unitItem.slug,
                        image: unitItem.image,
                        power: unitItem.power,
                        keywords: unitItem.keywordsCollection.items.map((k: any) => k.name),
                        intrinsicAbilities: unitItem.intrinsicAbilitiesCollection.items.map((ia:any) => ia.name),
                        weapons: unitItem.weaponsCollection.items.map((w: any) => w.name),
                        wargear: unitItem.availableWargearCollection.items.map((wg: any) => wg.name),
                    })
                })

                return unitListings;
            })
            .catch(error => {
                console.log(error);
                return [];
            });
    }

    getUnitDetailBySlug(slug: string): Promise<UnitDetail> {
        return this.makeGraphQLQuery(unitDetailBySlug, { slug })
            .then(response => transformToUnitDetail(response))
            .catch(error => {
                console.error(error);
                throw error;
            })
    }

    getAbilities(): Promise<Ability[]> {
        return this.makeGraphQLQuery(abilities)
            .then(response => response.data.abilityCollection.items)
            .catch(error => {
                console.error(error);
                throw error;
            })
    }

    getWeaponsWithUnitReferences(): Promise<WeaponWithUnits[]> {
        return this.makeGraphQLQuery(weaponsWithUnitReferences)
            .then(response => {
                return response.data.weaponCollection.items.map((item: any) => {
                    return {
                        name: item.name,
                        range: item.range,
                        weaponType: item.weaponType.name,
                        attacks: item.attacks,
                        strength: item.strength,
                        armorPiercing: item.armorPiercing,
                        damage: item.damage,
                        abilities: item.abilities,
                        units: item.linkedFrom.unitCollection.items.map((item: any) => {
                            return {
                                name: item.name,
                                slug: item.slug
                            }
                        })
                    }
                })
            })
            .catch(error => {
                console.error(error);
                throw error;
            })
    }


}

export const contentfulProvider = new ContentfulProvider(
    process.env.CONTENTFUL_SPACE_ID || '',
    process.env.CONTENTFUL_ACCESS_TOKEN || ''
);