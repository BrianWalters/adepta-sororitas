import {FunctionComponent} from "react";
import styles from './AbilityCard.module.css';

interface AbilityCardProps {
    name: string;
    ability: string;
}

export const AbilityCard: FunctionComponent<AbilityCardProps> = ({ name, ability }) => {
    return (
        <div className={styles.abilityCard}>
            <dt className={styles.abilityCard__name}>{ name }</dt>
            <dd className={styles.abilityCard__ability}>{ ability }</dd>
        </div>
    );
}