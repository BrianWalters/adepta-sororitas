import {FunctionComponent} from "react";
import Link from "next/link";

export const PageHeader: FunctionComponent = () => {
    return (
        <header>
            <Link href="/">Home</Link>
        </header>
    );
}