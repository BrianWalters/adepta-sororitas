import Head from "next/head";
import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {cmsProvider} from "@/cms/Provider/CmsProvider";
import styles from './UnitDetailPage.module.css';
import {SimpleList} from "@/components/SimpleList";
import Link from "next/link";

export default function UnitDetail({unit}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>{unit.name} — Adepta Sororitas</title>
            </Head>
            <header>
                <Link href="/">Home</Link>
            </header>
            <main className={styles.unitDetail}>
                <div className={styles.unitDetail__summary}>
                    <img className={styles.unitDetail__image} src={unit.image.url} alt={unit.image.title}/>
                    <div className={styles.unitDetail__summaryColumn}>
                        <div className={styles.unitDetail__titleAndPower}>
                            <h1>{unit.name}</h1>
                            <div className={`power-badge`}>
                                <span className={`power-label`}>Power</span>
                                {unit.power}
                            </div>
                            <div className="sans-serif">
                                <SimpleList items={unit.keywords}/>
                            </div>
                        </div>
                        <div>
                            <strong>Abilities: </strong>
                            <SimpleList items={unit.intrinsicAbilities.map(ability => ability.name)}/>
                        </div>
                        <div>
                            <strong>Weapons: </strong>
                            <SimpleList items={unit.weapons.map(weapon => weapon.name)}/>
                        </div>
                        {unit.wargear.length > 0 && <div>
                            <strong>Wargear: </strong>
                            <SimpleList items={unit.wargear.map(wg => wg.name)}/>
                        </div>}
                    </div>
                </div>
                <div className={styles.unitDetail__content}>
                    <table>
                        <thead>
                        <tr>
                            <th>Model</th>
                            <th>Movement</th>
                            <th>Weapon skill</th>
                            <th>Ballistic skill</th>
                            <th>Strength</th>
                            <th>Toughness</th>
                            <th>Wounds</th>
                            <th>Attacks</th>
                            <th>Leadership</th>
                            <th>Save</th>
                        </tr>
                        </thead>
                        <tbody>
                        { unit.models.map(model => {
                            return (
                                <tr key={model.name}>
                                    <td>{model.name}</td>
                                    <td className="text-right">{model.movement}&quot;</td>
                                    <td className="text-right">{model.weaponSkill}+</td>
                                    <td className="text-right">{model.ballisticSkill}+</td>
                                    <td className="text-right">{model.strength}</td>
                                    <td className="text-right">{model.toughness}</td>
                                    <td className="text-right">{model.wounds}</td>
                                    <td className="text-right">{model.attacks}</td>
                                    <td className="text-right">{model.leadership}</td>
                                    <td className="text-right">{model.save}+</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
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
                        </tr>
                        </thead>
                        <tbody>
                        { unit.weapons.map(weapon => {
                            return (
                                <tr key={weapon.name}>
                                    <td>{weapon.name}</td>
                                    <td>{weapon.range}</td>
                                    <td>{`${weapon.weaponType} ${weapon.attacks}`}</td>
                                    <td>{weapon.strength}</td>
                                    <td>{weapon.armorPiercing}</td>
                                    <td>{weapon.damage}</td>
                                    <td>{weapon.abilities ? weapon.abilities : '-'}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export async function getStaticPaths() {
    const units = await cmsProvider.getUnitListings();
    return {
        paths: units.map(unit => {
            return {
                params: {slug: unit.slug},
            }
        }),
        fallback: false
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const {slug} = context.params as { slug: string }; //This can't be right
    const unit = await cmsProvider.getUnitDetailBySlug(slug);
    return {
        props: {
            unit
        }
    }
}