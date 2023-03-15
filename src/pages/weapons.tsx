import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {cmsProvider} from "@/cms/Provider/CmsProvider";
import Head from "next/head";
import {PageHeader} from "@/components/PageHeader";
import Link from "next/link";
import styles from './weapons.module.css';

export default function Weapons({weapons}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
        <Head>
            <title>Weapons — Adepta Sororitas</title>
        </Head>
        <main className={styles.weapons}>
            <PageHeader/>
            <table>
                <thead>
                <tr>
                    <th>Weapon</th>
                    <th>Range</th>
                    <th>Type</th>
                    <th>Strength</th>
                    <th>AP</th>
                    <th>Damage</th>
                    <th>Abilities</th>
                    <th>Units</th>
                </tr>
                </thead>
                <tbody>
                {weapons.map(weapon => {
                    return (
                        <tr key={weapon.name}>
                            <td>{weapon.name}</td>
                            <td>
                                {weapon.range ? `${weapon.range}"` : 'Melee'}
                            </td>
                            <td>{`${weapon.weaponType} ${weapon.attacks ? weapon.attacks : ''}`}</td>
                            <td className="text-right">{weapon.strength}</td>
                            <td className="text-right">{weapon.armorPiercing}</td>
                            <td className="text-right">{weapon.damage}</td>
                            <td>{weapon.abilities ? weapon.abilities : '-'}</td>
                            <td>
                                {weapon.units.map((unit, index) => {
                                    return (
                                        <>
                                            <Link key={unit.slug} href={`/units/${unit.slug}`}>
                                                {unit.name}
                                            </Link>
                                            { index < weapon.units.length - 1 ? ', ' : ''}
                                        </>
                                    )
                                })}
                            </td>
                        </tr>
                    );
            })}
        </tbody>
        </table>
</main>
</>
)
}

    export async function getStaticProps(context: GetStaticPropsContext) {
        const weapons = await cmsProvider.getWeaponsWithUnitReferences();
        return {
            props: {
                weapons
            }
        }
    }