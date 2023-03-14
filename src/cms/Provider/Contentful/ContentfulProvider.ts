import {ProviderInterface} from "@/cms/Provider/ProviderInterface";
import {UnitListing} from "@/cms/Domain/UnitListing";
import {unitListingsAlphabetical} from "@/cms/Provider/Contentful/queries/units";

class ContentfulProvider implements ProviderInterface {
    constructor(private space: string, private accessToken: string) {

    }

    async makeGraphQLQuery(query: string): Promise<any> {
        return fetch(`https://graphql.contentful.com/content/v1/spaces/${this.space}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.accessToken}`
            },
            body: JSON.stringify({ query })
        }).then((response) => response.json());
    }

    async getUnitListing(): Promise<UnitListing[]> {
        return this.makeGraphQLQuery(unitListingsAlphabetical)
            .then(response => {
                const unitListings: UnitListing[] = [];
                response.data.unitCollection.items.forEach((unitItem: any) => {
                    unitListings.push({
                        name: unitItem.name,
                        image: unitItem.image,
                        power: unitItem.power,
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
}

export const contentfulProvider = new ContentfulProvider(
    process.env.CONTENTFUL_SPACE_ID || '',
    process.env.CONTENTFUL_ACCESS_TOKEN || ''
);