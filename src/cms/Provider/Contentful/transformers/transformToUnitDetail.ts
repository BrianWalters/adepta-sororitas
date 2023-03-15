import {UnitDetail} from "@/cms/Domain/UnitDetail";

export const transformToUnitDetail: (queryResponse: any) => UnitDetail = (queryResponse) => {
    const unit = queryResponse.data.unitCollection.items[0];

    return {
        image: {
            title: unit.image.title,
            url: unit.image.url
        },
        intrinsicAbilities: unit.intrinsicAbilitiesCollection.items,
        name: unit.name,
        models: unit.modelsCollection.items,
        keywords: unit.keywordsCollection.items.map((k:any) => k.name),
        wargear: unit.availableWargearCollection.items,
        power: unit.power,
        weapons: unit.weaponsCollection.items.map((item: any) => {
            return {...item, weaponType: item.weaponType.name}
        })
    }
}