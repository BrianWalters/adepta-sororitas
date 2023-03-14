import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {provider} from "@/cms/Provider/Provider";
import {InferGetStaticPropsType} from "next";
import {UnitCard} from "@/components/UnitCard";

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
                    {units.map(unit => <li key={unit.name}>
                        <UnitCard unit={unit} />
                    </li>)}
                </ul>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const units = await provider.getUnitListing();
    return {
        props: {
            units
        }
    }
}