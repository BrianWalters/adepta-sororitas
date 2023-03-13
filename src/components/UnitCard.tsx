import {FunctionComponent} from "react";
import {Unit} from "@/cms/Domain/Unit";
import styles from './UnitCard.module.css'

export interface UnitCardProps {
    unit: Unit;
}

export const UnitCard: FunctionComponent<UnitCardProps> = ({unit}) => {
    return (
        <div className={styles.unitCard}>
            <img src={unit.image.url} alt={unit.image.title}/>
            <div className={styles.unitCard__name}>{unit.name}</div>
            <div className={styles.unitCard__power}>
                <span className={styles.unitCard__powerLabel}>Power</span>
                <span>{unit.power}</span>
            </div>
        </div>
    )
}