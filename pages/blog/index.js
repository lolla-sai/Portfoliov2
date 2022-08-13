import Head from "next/head";
import Header from "../../components/Header";
import SideLinks from "../../components/SideLinks";

function BlogHome() {
    return (
        <div>
            <Head>
                <title>Sai Lolla - Blog</title>
                <meta name="description" content="Blog - Sai Lolla" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <Header />
            <SideLinks />
        </div>
    );
}

export default BlogHome;
