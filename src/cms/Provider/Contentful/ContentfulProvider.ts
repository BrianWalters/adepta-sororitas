import {ProviderInterface} from "@/cms/Provider/ProviderInterface";
import {Unit} from "@/cms/Domain/Unit";
import {allUnits} from "@/cms/Provider/Contentful/queries/units";

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

    async getUnits(): Promise<Unit[]> {
        return this.makeGraphQLQuery(allUnits)
            .then(response => response.data.unitCollection.items)
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