import {FunctionComponent} from "react";
import {UnitListing} from "@/cms/Domain/UnitListing";
import styles from './UnitCard.module.css'
import {SimpleList} from "@/components/SimpleList";
import Link from "next/link";

export interface UnitCardProps {
    unit: UnitListing;
}

export const UnitCard: FunctionComponent<UnitCardProps> = ({unit}) => {
    return (
        <div className={styles.unitCard}>
            <img src={unit.image.url} alt={unit.image.title}/>
            <Link href={`units/${unit.slug}`} className={styles.unitCard__name}>
                {unit.name}
            </Link>
            <div className={styles.unitCard__keywords}>
                <SimpleList items={unit.keywords}/>
            </div>
            <div className={styles.unitCard__power}>
                <span className={styles.unitCard__powerLabel}>Power</span>
                <span>{unit.power}</span>
            </div>
            <div className={styles.unitCard__lists}>
                <div>
                    <strong>Weapons: </strong>
                    <SimpleList items={unit.weapons}/>
                </div>
                <div>
                    <strong>Abilities: </strong>
                    <SimpleList items={unit.intrinsicAbilities}/>
                </div>
                {unit.wargear.length > 0 && <div>
                    <strong>Wargear: </strong>
                    <SimpleList items={unit.wargear}/>
                </div>}
            </div>
        </div>
    )
}