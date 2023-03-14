import Head from "next/head";
import {GetStaticPropsContext, InferGetStaticPropsType} from "next";
import {provider} from "@/cms/Provider/Provider";

export default function UnitDetail({ unit }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Test title</title>
            </Head>
            <main>
                a detail page whoa
                {unit.name}
            </main>
        </>
    );
}

export async function getStaticPaths() {
    const units = await provider.getUnitListings();
    return {
        paths: units.map(unit => {
            return {
                params: { slug: unit.slug },
            }
        }),
        fallback: false
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { slug } = context.params as { slug: string }; //This can't be right
    const unit = await provider.getUnitDetailBySlug(slug);
    return {
        props: {
            unit
        }
    }
}