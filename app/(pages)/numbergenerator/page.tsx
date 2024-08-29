import Head from "next/head";
import NumberGenerator from "@/components/customcomponent/numbergenerator";

export default function NumbersPage() {
    return (
        <div>
            <Head>
                <title>Number Generator</title>
                <meta name="description" content="A simple number generator using Shadcn cards" />
            </Head>
            <main className="min-h-screen flex items-center justify-center">
                <NumberGenerator />
            </main>
        </div>
    );
}