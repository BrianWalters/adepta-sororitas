import {UnitDetail} from "@/cms/Domain/UnitDetail";

export const transformToUnitDetail: (queryResponse: any) => UnitDetail = (queryResponse) => {
    return {
        image: {
            title: '',
            url: ''
        },
        intrinsicAbilities: [],
        name: 'Fake name',
        models: [],
        keywords: [],
        wargear: [],
        power: 0,
        weapons: []
    }
}