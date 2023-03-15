import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {cmsProvider} from "@/cms/Provider/CmsProvider";
import styles from './abilities.module.css';
import {PageHeader} from "@/components/PageHeader";

export default function Abilities({ abilities }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <main className={styles.abilities}>
            <PageHeader />
            <dl className={styles.abilities__list}>
                { abilities.map(ability => {
                    return (
                        <>
                            <dt className={styles.abilities__name}>{ability.name}</dt>
                            <dd className={styles.abilities__rules}>{ability.rules}</dd>
                        </>
                    )
                })}
            </dl>
        </main>
    );
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const abilities = await cmsProvider.getAbilities();
    return {
        props: {
            abilities
        }
    }
}