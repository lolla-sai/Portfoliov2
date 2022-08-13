import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="bg-[#0a192f] font-custom-sans scroll-smooth !leading-[1.3] text-lg md:text-xl">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
