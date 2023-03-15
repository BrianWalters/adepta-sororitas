import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {cmsProvider} from "@/cms/Provider/CmsProvider";
import {InferGetStaticPropsType} from "next";
import {UnitCard} from "@/components/UnitCard";
import Link from "next/link";

export default function Home({units}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Adepta Sororitas</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.home}>
                <ul className={styles.home__grid}>
                    <li className={styles.home__otherCard}>
                        <Link href="/abilities">Abilities</Link>
                    </li>
                    <li className={styles.home__otherCard}>
                        <Link href="/weapons">Weapons</Link>
                    </li>
                    {units.map(unit => <li key={unit.name}>
                        <UnitCard unit={unit} />
                    </li>)}
                </ul>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const units = await cmsProvider.getUnitListings();
    return {
        props: {
            units
        }
    }
}